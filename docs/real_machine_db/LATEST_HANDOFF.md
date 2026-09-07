# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **872**
- latestRecordAdded: **パチスロサイバーブルー**（三洋物産）
- latestRecord: `docs/real_machine_db/machines/2015-03-02_pachislot-cyber-blue.md`
- chronologicalFrontier: **2015-03-02**
- frontierLatestMachine: **パチスロサイバーブルー**（三洋物産）
- schema: **resetBehavior v0.7**
- status: **2015-03-02_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、本 `LATEST_HANDOFF.md`、No.871 `2015-03-02_super-rakuraku-biscus.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時正本は **871件 / chronologicalFrontier 2015-03-02 / 03-02_GROUP_OPEN**。
- 次未処理の **パチスロサイバーブルー（三洋物産）** をNo.872として追加。
- K-Navi / パチ7でホール導入 **2015-03-02**、P-WORLD / パチマガスロマガ / 当時SANYO内覧会記事で機種・仕様を照合。
- 03/02群の次候補 **パチスロ ベルセルク（七匠）** は日付競合を追加監査。PiDEAの2015-01-19業界記事が **納品日3月1日予定**、一撃・パチ7・当時天井記事が03/02、K-Naviのみ03/09。03/02実稼働説の一次寄り根拠が強まったが、登録時は03/09もCONFLICTとして保持する。

## No.872 — パチスロサイバーブルー

- record: `docs/real_machine_db/machines/2015-03-02_pachislot-cyber-blue.md`
- manufacturer: **三洋物産**
- releaseDate: **2015-03-02**
- modelName: **パチスロサイバーブルーTA**（流通型式資料で複数確認、公的検定資料未固定）
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- systemType: **5号機 AT / 擬似ボーナス**

### 性能コア

- 機械割: **96.9 / 98.4 / 100.5 / 103.6 / 106.9 / 112.1%**。
- CYBER BONUS: **1/537.9 / 517.1 / 497.7 / 462.9 / 433.1 / 381.8**。
- BIO BONUS: **1/609.7 / 598.3 / 589.1 / 573.7 / 540.1 / 504.4**。
- BONUS合算: **1/285.8 / 277.4 / 269.8 / 256.2 / 240.4 / 217.3**。
- AT純増: **約2.5枚/G**。
- BIO BONUS: 基本15G・最低2セット・平均約90枚。
- CYBER BONUS: 初期40～150G・平均約235枚。
- 50枚ベースは表記揺れ・型式・メーカー名と `50枚 / 1000円 / ベース / コイン持ち` を変えて横断したが、安全な明示値を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior v0.7

- **設定変更時に内部状態を再抽選**。
- パチ&スロ必勝本の変更判別特集で、設定変更時 **50%で高確スタート**を直接確認。
- K-Naviで赤7ナビモード（低確 / 高確 / 超高確）の主な移行契機に **設定変更時**を確認。
- 朝一早期の高確以上確定「エクストラ」ステージ移行は設定変更推測材料。
- 通常天井は **ボーナス間900G消化後の次回サイバースコープ演出で完全ナビ**。900G到達即発動ではない。
- 別天井として **融合BONUS後、赤7成立20回目で完全ナビ + 融合BONUS確定**。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更 / 据え置き / 純電源OFF→ON時の900G進捗・融合BONUS間赤7回数のRESET/CARRY_OVER契約は本機固有資料を十分再探索したが `UNVERIFIED_AFTER_RESEARCH`。一般的5号機慣例から補完しない。
- 本機固有のガックン確定契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2015-03-02群 — OPEN

現時点での処理状況:

- 戦国コレクション2 — KPE — **No.870処理済み**
- スーパーラクラクビスカス — パイオニア — **No.871処理済み**
- パチスロサイバーブルー — 三洋物産 — **No.872処理済み**
- パチスロ ベルセルク — 七匠 — **未処理。03/02 vs 03/09 CONFLICT。PiDEAは納品3/1予定、一撃/パチ7/当時解析は03/02、K-Naviは03/09**
- コブラ — SNKプレイモア — **03/16候補。03/02へ入れない**

## 次回再開地点

1. **recordCount 872 / chronologicalFrontier 2015-03-02 / 03-02_GROUP_OPEN** から開始。
2. 最新mainの README / mission / INDEX / LATEST_HANDOFF / No.872を再確認。
3. 次処理優先: **パチスロ ベルセルク（七匠）**。導入日は03/02をcanonical候補としつつK-Navi03/09をCONFLICTで保持し、性能コア + resetBehavior v0.7を収集する。
4. ベルセルク登録後、03/02同日群を全メーカー再監査してからのみ `CLOSED_FOR_CURRENT_RESEARCH` 判定。
5. **コブラ（SNKプレイモア）は2015-03-16候補**として維持。
6. 欠損は表記揺れ・型式・メーカー名・設定変更/据え置き/純電断/天井/モード/ガックン等へ検索語を変え、公式・業界一次・当時解析・古いDB・回顧資料を横断後だけ `UNVERIFIED_AFTER_RESEARCH`。
7. 遡及resetBehavior QAカーソルは `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md` を維持。新規本線を止めない。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは **検定告示日 / 発表日 / 納品予定 / 全国導入 / 地域先行 / 実ホール導入 / 派生導入 / アプリ配信** を区別する。
- 据え置き・純電断挙動は一般的な5号機慣例から推定しない。
- `UNVERIFIED_AFTER_RESEARCH` は検索語・資料系統を変えた再探索後だけ使用する。
- 同名シリーズ・後継機のリセット契約を転記しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 主要出典 — 取得日 2026-09-07

### パチスロサイバーブルー
- K-Navi: https://p-kn.com/slot/2215/
- K-Navi 赤7ナビモード: https://p-kn.com/slot/2215/53389/
- P-WORLD: https://www.p-world.co.jp/machine/database/7648
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/23/a.php
- パチ7: https://pachiseven.jp/machines/4422/cutout/4
- P-WORLD/PiDEA 業界ニュース: https://news.p-world.co.jp/articles/7144
- パチ&スロ必勝本 設定変更判別特集: https://p.hisshobon.jp/vpage/1272/1
- すろぱちくえすと: https://www.slopachi-quest.com/article/cyber-blue/
- slotnews777: https://slotnews777.blog.fc2.com/blog-entry-2156.html
- 中一商事 型式資料: https://www.nakaiti.com/html/sayo0003.html

### 次候補 ベルセルク日付監査
- PiDEA 2015-01-19（納品日3月1日予定）: https://www.pidea.jp/articles/%E4%B8%83%E5%8C%A0%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%20%E3%83%99%E3%83%AB%E3%82%BB%E3%83%AB%E3%82%AF%E3%80%8D%E6%96%B0%E8%A6%8F%E5%8F%82%E5%85%A5%E7%AC%AC1%E5%BC%BE
- 一撃（導入予定日03/02）: https://1geki.jp/slot/berserk/
- パチ7（導入日03/02）: https://pachiseven.jp/machines/4419/cutout/74
- K-Navi（ホール導入開始03/09）: https://p-kn.com/slot/2221/
- すろぱちくえすと（03/02）: https://www.slopachi-quest.com/article/berserk/
