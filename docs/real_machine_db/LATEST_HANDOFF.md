# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **883**
- latestRecordAdded: **サイレントメビウス**（岡崎産業 / 遡及漏れ補完）
- latestRecordAddedPath: `docs/real_machine_db/machines/2015-04-13_silent-mobius.md`
- chronologicalFrontier: **2015-04-20**
- frontierLatestMachine: **パチスロ 陸奥圓明流外伝 修羅の刻**
- frontierRecord: `docs/real_machine_db/machines/2015-04-20_shura-no-toki.md`
- schema: **resetBehavior v0.7**
- status: **2015-04-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.882 `2015-04-20_shura-no-toki.md` を再読。
- INDEXは19件時点の旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **882件 / chronologicalFrontier 2015-04-20 / 04-20_GROUP_OPEN**。
- 2015-04-20同日群を「2015年4月20日 / 2015/04/20 / 4月20日導入」+ パチスロ/スロット/新台で再監査。修羅の刻以外の実ホール導入パチスロを今回強く固定できず、アプリ配信・パチンコ導入等の同日ノイズを除外して `2015-04-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
- 境界再監査中、前回 `2015-04-13_TO_2015-04-19_CLOSED` とされていた範囲に **サイレントメビウス** の未登録漏れを検出。
- GitHubコード検索で同機の既存レコードがないことを確認し、時系列漏れ防止ルールに従ってNo.883相当として遡及追加した。chronologicalFrontier自体は2015-04-20のまま維持。

## No.883 — サイレントメビウス（遡及漏れ補完）

- record: `docs/real_machine_db/machines/2015-04-13_silent-mobius.md`
- manufacturer: **岡崎産業**
- releaseDate canonical: **2015-04-13**
- modelName: **サイレントメビウスS1**
- inspectionNumber: **4S0997**
- systemType: **5号機 A+ART / ボーナス+セットストックART**

### 導入日 / identity

- PiDEA/P-WORLD業界記事は **2015-04-12納品予定**。
- すろぱちくえすと、天井DBは **2015-04-13導入**を明記し、P-WORLD掲示板にも2015-04-13実戦投稿が存在。
- パチマガスロマガ、P-WORLD機種DBは2015年4月表記。
- よって `delivery=2015-04-12 planned` と `hallStart=2015-04-13` を定義分離し、実ホール導入をcanonical採用。

### 性能コア

- 機械割: **96.5 / 97.6 / 100.0 / 103.3 / 105.6 / 109.2%**。
- ART初当たり: **1/251.2 / 242.5 / 226.5 / 217.5 / 209.6 / 195.9**。すろぱちくえすとの整数丸め系列と整合。
- ボーナス合算: **1/255 / 251 / 243 / 232 / 224 / 222**（当時解析の丸め値）。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。50枚/1000円/千円/コイン持ち/ベース、型式名・メーカー名、当時解析/旧DB/回顧資料まで再探索したが比較可能な本機固有値を固定できず。
- ART「メビウスタイム」: **1セット50G / 純増約1.3枚/G / セットストック型**。
- 赤7BIG **301枚** / 青7BIG **203枚** / REG **42枚**。
- 天井: **ボーナスまたはART間900G → ART1セット**。

### resetBehavior v0.7

- 設定変更: **天井までのゲーム数RESET_TO_0** を本機固有資料で確認。
- 据え置き: 天井G/内部状態/ARTストックの包括的引継ぎ契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。設定変更時RESETという事実から逆算推定しない。
- 純電源OFF→ON: 天井G/内部状態/表示/リール初動を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: 通常天井900G。**リセット専用固定短縮天井はNONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset: 規定G解除型の通常A/B/天国等は確認されず、朝一専用モードも `NONE_CONFIRMED_AFTER_RESEARCH`。
- stateAfterReset: 高確/前兆に相当する状態はあるが、設定変更時の開始状態/振り分けを固定できず `UNVERIFIED_AFTER_RESEARCH`。
- resetBenefits: 高確スタート・朝一ART優遇・短縮天井等の設定変更専用恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: **前日までの天井G進行消滅**。
- resetDetection: ガックン/リール初動/液晶表示/朝一挙動による本機固有判別は再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- 公開朝一数値: 設定変更時天井カウンタ0G、通常天井900G以外は `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### source / definition control

- 機械割はすろぱちくえすと、5号機クロニクル、pacnkで一致。
- ART初当たりはpacnk精密値とすろぱちくえすと丸め値が整合するためCONFLICT扱いしない。
- PiDEA/P-WORLD業界記事、P-WORLD機種DB、パチマガスロマガでボーナス枚数/ART基本性能を照合。
- 50枚ベース、据え置き、純電断、設定変更時状態振り分け、ガックンは一般的な5号機慣例や兄弟機から補完しない。

## 2015-04-20群

- **パチスロ 陸奥圓明流外伝 修羅の刻** — SANKYO — No.882
- 同日を全メーカー/新台/導入日系検索で再監査し、修羅の刻以外の実ホール導入パチスロを強く固定できず、今回 `CLOSED_FOR_CURRENT_RESEARCH`。

## 次回再開地点

1. **recordCount 883 / chronologicalFrontier 2015-04-20 / 04-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / `2015-04-13_silent-mobius.md` / `2015-04-20_shura-no-toki.md` を再確認。
3. **2015-04-21以降の境界監査**を具体日順に進める。まず04-21〜04-26、続いて04-27以降を確認し、未処理実ホール導入機を飛ばさない。
4. 現時点の次の強い既知アンカーは **2015-05-11「パチスロ ゴッドイーター」（山佐 / パチスロゴッドイーターCC / 4S0713）**。ただし04-21〜05-10を閉じる前に飛ばさない。
5. exact release dateでは検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / アプリ配信を分離する。
6. 欠損は表記揺れ・型式・メーカー名・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界一次・当時解析・古いDB・アーカイブ・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・兄弟機・後継機のリセット契約を転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### サイレントメビウス / 境界
- PiDEA X: https://www.pidea.jp/articles/%E5%B2%A1%E5%B4%8E%E3%80%8C%E3%83%A1%E3%83%93%E3%82%A6%E3%82%B9%E3%80%8DART%E3%81%AF%E6%9C%80%E5%A4%A710%E3%82%BB%E3%83%83%E3%83%88%E4%B8%8A%E4%B9%97%E3%81%9B
- P-WORLD業界ニュース: https://news.p-world.co.jp/articles/7227
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/7674
- すろぱちくえすと: https://www.slopachi-quest.com/article/silent-mebius/
- すろぱちくえすと機種まとめ: https://www.slopachi-quest.com/kisyubetsu/silent-mobius/
- pacnk: https://pacnk.com/slot/tools/sh_silentmebius.html
- 5号機クロニクル岡崎産業: https://5goki.com/okazaki
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/74/a.php
- 天井一覧: https://smaslo.man-soft.com/slot-tenzyou-itiran/

### 次候補
- K-Navi パチスロ ゴッドイーター: https://p-kn.com/slot/2240/
- HAZUSE パチスロ ゴッドイーター: https://hazuse.com/machine/pachislot/4S0713/
- 山佐発表由来4Gamer: https://www.4gamer.net/games/301/G030129/20150511064/
