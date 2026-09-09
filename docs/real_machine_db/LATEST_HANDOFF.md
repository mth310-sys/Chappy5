更新日: 2026-09-09

## 現在地点
- recordCount: **1121**
- latestRecordAdded: **戦国パチスロ花の慶次～天を穿つ戦槍～**（EXCITE）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08-21_hana-no-keiji-ten-wo-ugatsu-ikusayari.md`
- chronologicalFrontier: **2017-08-21**
- frontierLatestMachine: **戦国パチスロ花の慶次～天を穿つ戦槍～ — No.1121**
- schema: **resetBehavior v0.7**
- status: **2017-08-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME、mission v0.7、INDEX、LATEST_HANDOFF、No.1120「戦国乙女～TYPE-A～」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF＋実レコードを進捗正本として採用。
- 開始時mainは **1120件 / chronologicalFrontier 2017-08-21 / 8/21群OPEN**。
- HANDOFF最優先の次機種 **「戦国パチスロ花の慶次～天を穿つ戦槍～」** をNo.1121としてperformance core + resetBehavior v0.7で登録。
- 型式名は検定通過記事で **花の慶次～天を穿つ戦槍～T**、鹿児島県公安委員会告示で製造者 **株式会社EXCITE**・検定番号 **7S0422** を一次確認。
- 導入日は2017年8月7日付週刊アミューズメントジャパンの「8月21日導入予定」、PiDEA Xの納品8/20～、複数解析の8/21で一致し **2017-08-21** をcanonical。
- resetBehaviorは一撃の設定変更/電源OFF ON直接表と設定変更時モード数値を採用。実戦値由来の周期前倒しは解析確定値と分離保存。

## No.1121 — 戦国パチスロ花の慶次～天を穿つ戦槍～
- manufacturer: **EXCITE（エキサイト）**
- releaseDate canonical: **2017-08-21**
- formalModelName: **花の慶次～天を穿つ戦槍～T**
- certificationNumber: **7S0422**
- generation/system: **5号機 / ART / CZ / 周期抽選 / ボーナス非搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **98.5 / 99.2 / 100.7 / 103.3 / 107.0 / 110.1%**。
- ART初当たり: **1/431.3 / 419.7 / 398.7 / 357.3 / 330.1 / 306.3**。
- CZ「皆朱の刻」突入率: **1/671.7 / 598.4 / 671.1 / 605.1 / 683.1 / 611.2**、ART期待度 **44.5～45.5%**。
- ベース: **約47G/50枚**。
- ART純増: **約2.0枚/G**。
- ART「大合戦BONUS」: **1セット平均約50G / 最大100G**。
- 通常天井: **12周期目（液晶1187G）＋前兆**、恩恵 **ART＋ストック1個**。

### resetBehavior v0.7
- settingChange: **天井RESET / モード再抽選 / 状態RESET / 液晶桜並木**。
- pure power OFF→ON: **天井・モード・状態CARRYOVER / 液晶桜並木**。
- explicit stay-setting contract: 純電断表から推測転記せず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時モード: **通常A33% / 通常B25% / 天国準備17% / 天国25%**。
- 天国選択時は **1周期目ART確定**。
- リセット後周期位置は実戦値で通常より約30～40G前倒し、70～100G前後に集中・平均約50G前後で周期到達との観測があるが、固定短縮天井ではなく `OBSERVATIONAL_RESET_CYCLE_OFFSET` として分離。
- 設定変更時の状態数値振り分けは検索語・資料系統を変えても直接固定できず **UNVERIFIED_AFTER_RESEARCH_FOR_NUMERIC_STATE_DISTRIBUTION**。
- ガックンは非常に判別困難。設定変更/純電断とも桜並木開始のためステージ単独では変更判別不可。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-08-21群監査 — OPEN
- 登録済み: **No.1118 イノキロードトゥゴッド / No.1119 パチスロ ロボットガールズZ / No.1120 戦国乙女～TYPE-A～ / No.1121 戦国パチスロ花の慶次～天を穿つ戦槍～**。
- 同日未処理候補: **ぱちスロ 仮面ライダーBLACK / 神の左手 悪魔の右目**。
- ALL7の同日「めぞん一刻～約束～」はパチンコ `CRめぞん一刻4 約束` のため本パチスロDB対象外。
- イミソーレ3A等の8月候補は日付を個別資料で再監査してから群へ含める。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は新規本線No.1121を優先したため遡及カーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1121を再取得。
2. **1121件 / chronologicalFrontier 2017-08-21 / 8/21群OPEN** を正本として継続。
3. 次の未処理候補は **「ぱちスロ 仮面ライダーBLACK」No.1122**。正式型式・検定番号・performance core + resetBehavior v0.7を収集する。
4. 続いて **神の左手 悪魔の右目** を処理し、8/21全メーカー横断監査後に群CLOSED可否を判定。
5. イミソーレ3A等の8月候補も別系統カレンダー・型式名・メーカーで境界監査して漏れを防ぐ。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1121 戦国パチスロ花の慶次～天を穿つ戦槍～
- 鹿児島県公安委員会告示第59号: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1705/documents/59374_20170529164319-1.pdf
- パチマガスロマガ 遊技機検定情報: https://cs62.cs-plaza.com/g/pachi/column/detail.php?mcl_cd=0098&mwr_cd=009&tac_cd=00039297&type=1
- p-media 検定通過記事: https://p-media.info/%E3%81%9B%E3%82%93%E3%81%9D%E3%81%86%EF%BC%9F%E3%81%84%E3%81%8F%E3%81%95%E3%82%84%E3%82%8A%EF%BC%9F%E3%82%A8%E3%82%AD%E3%82%B5%E3%82%A4%E3%83%88%E3%81%8B%E3%82%89%E3%80%8C%E8%8A%B1%E3%81%AE%E6%85%B6/
- グリーンべると/P-WORLD 発表会: https://news.p-world.co.jp/articles/9347/greenbelt
- PiDEA X 機械選定/スペック: https://pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E8%8A%B1%E3%81%AE%E6%85%B6%E6%AC%A1%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
- 週刊アミューズメントジャパン 2017-08-07号: https://www.niraku.co.jp/news/assets/672e550adb59a8b13acc9b7d7a0d1f9b045c7b45.pdf
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/8436
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/41213/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_hananokeiji_ten/3/
- 一撃 モード移行抽選: https://1geki.jp/slot/s_hananokeiji_ten/42/
- 一撃 CZ「皆朱の刻」: https://1geki.jp/slot/s_hananokeiji_ten/43/
- 期待値見える化 リセット挙動: https://slotjin.com/slot/keiji4-reset/
- すろぱちくえすと: https://www.slopachi-quest.com/article/hananokeiji-ikusayari/

### 8/21群境界監査
- 2017年導入日順一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 神の左手 悪魔の右目: https://chonborista.com/slot/high-enter/41803/
