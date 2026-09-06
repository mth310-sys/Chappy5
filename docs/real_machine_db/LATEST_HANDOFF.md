# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **843**
- latestRecordAdded: **ささみさん＠がんばらないすろっと**（DAXEL）— 2014-09-22
- latestRecord: `docs/real_machine_db/machines/2014-09-22_sasami-san-ganbaranai-slot.md`
- chronologicalFrontier: **2014-09-22**
- frontierLatestMachine: **ささみさん＠がんばらないすろっと**
- schema: **resetBehavior v0.7**
- status: **2014-09-22_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、842件目 `2014-09-16_new-king-hanahana-30.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **842件 / 2014-09-16 / 09-16_GROUP_OPEN**。
- 2014-09-16同日群を `9月16日 / 2014-09-16 / パチスロ / 新台 / 導入開始 / ホール導入 / 納品` とメーカー別表記で再監査。今回の探索範囲では「ニューキングハナハナ-30」以外の具体日付き未登録5号機を固定できなかったため **09-16_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 09-17〜09-21も日付別に境界監査し、具体日付き未登録5号機を今回固定できず **CLOSED_FOR_CURRENT_RESEARCH**。
- 09-22群を監査したところ、既知候補「スロット バットマン」に加えて **DAXEL「ささみさん＠がんばらないすろっと」** がK-Naviで2014-09-22ホール導入開始と確認でき、GitHub未登録だったため漏れ防止ルールで先にNo.843として登録。
- machine record commit: `2c569f47e12b66cfd038dd398e40614012ffd566`。

## 今回追加 — ささみさん＠がんばらないすろっと

### identity / 性能コア

- manufacturer: **DAXEL**。
- hall start primary: **2014-09-22**（K-Navi）。
- 型式表記: **ささみさん＠がんばらないすろっとDA** を後年実機資料で確認。検定番号は今回安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- type: **5号機 / ART / 擬似ボーナス / 周期抽選 / CZ**。
- 機械割: **97.1 / 98.5 / 100.0 / 104.0 / 107.3 / 110.2%**。
- ボーナス合成: **1/125.8 / 119.9 / 113.6 / 107.2 / 100.8 / 91.7**。
- パチマガスロマガ内訳:
  - すーぱーがんばる@ぼーなす: **1/1315.9 / 1428.5 / 1132.8 / 1229.0 / 937.8 / 975.4**。
  - がんばる@ぼーなす: **1/203.2 / 196.8 / 185.2 / 178.2 / 162.4 / 154.2**。
  - がんばる@ちゃんす: **1/440.7 / 390.8 / 397.1 / 344.2 / 371.3 / 294.6**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。初日ユーザー実戦の「1万円で約250G」は単発実戦値のため比較値に採用せず。
- ART純増: **約2.0枚/G**。
- がんばる@ぼーなす: **100G+α / 約204枚**。
- がんばる@ちゃんす: **小役8回+α / 平均約80枚 / 最大7セット**。
- 通常周期: **1〜333G**。
- 通常ゲーム数天井: **ボーナス間888G**。
- 周期天井: **4周期でボーナス確定**。
- CZ天井: 当時解析で **CZ間333G**。
- coreStatus: **COMPLETE_CORE_WITH_SOURCE_LIMITS**。

## resetBehavior v0.7 — ささみさん＠がんばらないすろっと

- 設定変更時は通常最大888Gのゲーム数天井が **最大777Gへ短縮**。
- 当時解析で設定変更時は **555G天井が1/8 = 12.5%**。
- モードには設定変更専用の移行が存在し、当時解析では「基本のモード移行率自体は冷遇」とされる。ただし今回取得できた本文から完全な設定変更時モード振り分け表を安全に復元できず `UNVERIFIED_FOR_EXACT_FULL_TABLE`。
- 据え置きについては **前日420G + 当日280G付近から宵越し天井到達**の当時実戦例があり、ボーナス間内部GのCARRYOVERを `PERIOD_OBSERVATIONAL_SUPPORT` として保存。
- 据え置き時のモード・周期回数・CZ間カウンタ・ムリムリメーター完全保持は直接解析本文を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更なしの単純電源OFF→ONについても、ゲーム数/周期/モード/CZ間/メーターの直接対照表を固定できず **UNVERIFIED_AFTER_RESEARCH**。据え置き実戦から電断契約へ推測拡張しない。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- リセット主要恩恵: **888G→777G短縮、555G天井12.5%**。
- リセット不利: モード移行が定性的に「冷遇」とされるが完全数値は未復元。
- ガックン・初期出目・初期ステージ単独での本機固有の変更判別: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetBehaviorQA: **COMPLETE_WITH_SOURCE_LIMITS**。

## 注意 / CONFLICT / source-quality

- 後年DBの一部に本機を **6号機** とする明確な誤記がある。2014年導入、P-WORLDの5号機表記、当時資料と矛盾するため採用しない。
- 50枚ベースは単発実戦投稿から推定しない。
- 「据え置きなら内部G引継ぎ」を支持する当時実戦はあるが、電源OFF→ON単独挙動や他内部情報へ自動拡張しない。
- モード冷遇を平均化/推定表化しない。

## 2014-09-16〜09-21監査

- 09-16: ニューキングハナハナ-30以外の具体日付き未登録5号機を今回固定できず **GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 09-17〜09-21: 日付別・新台・導入開始・ホール導入・納品の検索とメーカー別表記を再監査し、今回具体日付き未登録5号機を固定できず **CLOSED_FOR_CURRENT_RESEARCH**。

## 2014-09-22群

- **ささみさん＠がんばらないすろっと** — No.843登録済み。
- **スロット バットマン**（メーシー）— K-Naviで2014-09-22ホール導入開始を再確認。GitHub未登録。次回最優先候補。
- 09-22群は他メーカー未登録機の最終監査前なので **GROUP_OPEN** を維持。
- 同日候補をすべて処理してCLOSED後、09-23以降を時系列監査する。
- 後続既知候補: **2014-09-29「ドリームジャンボ」**、**「バビロン(with桜丘ショコラ)」**。バビロンは09-29/10-06の導入日競合があるため到達時に再精査。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-02_new-hanahana-30.md`（ニューハナハナ-30）。
- 新規収集を止めず、本線と並行して1件ずつ前進する。

## safeguard

- 2014-09-22群では「バットマン」だけでなく「ささみさん＠がんばらないすろっと」も存在したため、日付群CLOSED前に必ず全メーカー横断監査を行う。
- 後年パチ図鑑の「6号機」誤記を世代/有利区間へ転記しない。
- ささみさんの据え置き宵越し実戦から、単純電源OFF→ON挙動を推定しない。
- 555G 12.5% / 最大777Gは設定変更時の公開解析値として扱い、通常時の全モード振り分けや完全再現用詳細抽選へ拡張しない。
- P-WORLD等の最終更新日を導入日に使用しない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 843 / chronologicalFrontier 2014-09-22 / 09-22_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 843件目を再確認。
3. **メーシー「スロット バットマン」** をNo.844候補として性能コア + resetBehavior v0.7を処理。
4. その後 **2014-09-22同日群を全メーカー横断で最終監査**し、未登録機があれば同日を優先。
5. 同日群CLOSED後、09-23以降を時系列監査。
6. 遡及QAは **`2007-02_new-hanahana-30.md`** から再開。

## 主要出典 — 取得日 2026-09-07

### ささみさん＠がんばらないすろっと
- DAXEL公式: `https://www.daxel.co.jp/sasami/sp/about/`
- K-Navi: `https://p-kn.com/slot/2111/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7488`
- パチマガスロマガ TOP: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/05/daxel_slot_05.php`
- パチマガスロマガ ボーナス確率: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/05/h.php`
- パチマガスロマガ ARTフロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/05/l.php`
- PiDEA: `https://www.pidea.jp/articles/%E3%83%80%E3%82%AF%E3%82%BB%E3%83%AB%E3%80%8C%E3%81%95%E3%81%95%E3%81%BF%E3%81%95%E3%82%93%E3%80%8D%E3%81%AB%E3%82%A2%E3%83%8B%E3%83%A1%E5%85%A812%E8%A9%B1%E5%AE%8C%E5%85%A8%E5%8F%8E%E9%8C%B2`
- すろぱちくえすと機種まとめ: `https://www.slopachi-quest.com/kisyubetsu/sasamisan/`
- すろぱちくえすと天井/リセット: `https://www.slopachi-quest.com/article/sasamisan-mode-tenzyou/`
- すろぱちくえすとモード: `https://www.slopachi-quest.com/article/sasamisan-mode/`
- 肉汁スロッター: `https://www.nikuziru.com/archives/960`
- 宵越し実戦例: `https://freeslot.blog.fc2.com/blog-entry-266.html`
- パチ7回顧: `https://pachiseven.jp/columns/column_detail/22443`
- 型式表記補助（愛品館）: `https://www.aihin.co.jp/new/news-1063951/`

### 次候補/境界
- スロット バットマン K-Navi: `https://p-kn.com/slot/2110/`
