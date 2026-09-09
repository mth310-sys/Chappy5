更新日: 2026-09-09

## 現在地点
- recordCount: **1120**
- latestRecordAdded: **戦国乙女～TYPE-A～**（オリンピア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08-21_sengoku-otome-type-a.md`
- chronologicalFrontier: **2017-08-21**
- frontierLatestMachine: **戦国乙女～TYPE-A～ — No.1120**
- schema: **resetBehavior v0.7**
- status: **2017-08-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME、mission v0.7、INDEX、LATEST_HANDOFF、No.1119「パチスロ ロボットガールズZ」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF＋実レコードを進捗正本として採用。
- 開始時mainは **1119件 / chronologicalFrontier 2017-08-21 / 8/21群OPEN**。
- HANDOFF最優先の次機種 **「戦国乙女 Type-A」** をNo.1120としてperformance core + resetBehavior v0.7で登録。
- オリンピア公式製品ページ・平和2017年機種一覧で製品を一次確認。平和一覧の「登場年月 2017年06月」は製品登場/発表系月としてホール導入日と分離。
- ホール導入日は一撃・ちょんぼりすた・すろぱちくえすと・当時導入記事が **2017-08-21** で一致しcanonical。HAZUSEは **2017-08-28** のため `CONFLICT_RELEASE_DATE_2017_08_21_VS_2017_08_28` を保持。
- 型式名 **戦国乙女Type-A／D5**、検定番号 **6S1230** をHAZUSEで確認。

## No.1120 — 戦国乙女～TYPE-A～
- manufacturer: **オリンピア**
- releaseDate canonical: **2017-08-21**
- formalModelName: **戦国乙女Type-A／D5**
- certificationNumber: **6S1230**
- generation/system: **5号機 / ノーマル+A+RT / BIG後30G RT / 天井非搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_RELEASE_DATE_CONFLICT**

### performanceCore
- 市場PAY: **98.0 / 98.8 / 100.8 / 104.7 / 112.0 / 114.1%**。
- 一撃掲載の完全攻略時PAY: **99.4 / 100.1 / 102.2 / 104.7 / 112.0 / 114.1%**。市場PAYと定義を分離。
- BIG: **1/309.1 / 318.1 / 292.6 / 295.2 / 242.7 / 252.1**。
- REG: **1/376.6 / 321.3 / 358.1 / 297.9 / 364.1 / 254.0**。
- 合算: **1/169.8 / 159.8 / 161.0 / 148.3 / 145.6 / 126.5**。
- ベース代表値: **約35G/50枚**。一撃精密整理では完全攻略時35.0～37.7G、適当打ち33.5～36.0G。
- BIG: **最大311枚 + RT30G**、REG: **104枚**。
- RT純増は主要解析で **現状維持程度**。比較可能な精密枚/G値は `UNVERIFIED_AFTER_RESEARCH_FOR_EXACT_RT_NET_INCREASE`。

### resetBehavior v0.7
- game-count ceiling / reset ceiling: **NOT_APPLICABLE_NO_CEILING**。
- settingChange RT/bonus/display direct contract: **UNVERIFIED_AFTER_RESEARCH**。一撃専用「天井/設定変更」ページにも天井非搭載以外の変更固有挙動は掲載なし。
- explicit stay-setting RT/bonus/display contract: **UNVERIFIED_AFTER_RESEARCH**。
- pure power OFF→ON: 中古実機の実動作報告に **ボーナス・RT引継ぎ** が1件あるが、メーカー/解析一次表でないためcanonical化せず `SECONDARY_FIELD_REPORT_POWER_CYCLE_BONUS_AND_RT_CARRYOVER` として補助保存。
- morning-only internal mode / reset distribution / fixed-game hit rate: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset benefit/penalty: 天井短縮・高確スタート・初当たり優遇など **NONE_CONFIRMED_AFTER_RESEARCH**。
- machine-specific gakkun / deterministic reset detection: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-08-21群監査 — OPEN
- 登録済み: **No.1118 イノキロードトゥゴッド / No.1119 パチスロ ロボットガールズZ / No.1120 戦国乙女～TYPE-A～**。
- 同日未処理候補: **花の慶次 天を穿つ戦槍 / ぱちスロ 仮面ライダーBLACK / 神の左手 悪魔の右目**。
- ALL7の同日「めぞん一刻～約束～」はパチンコ `CRめぞん一刻4 約束` のため本パチスロDB対象外。
- イミソーレ3A等の8月候補は日付を個別資料で再監査してから群へ含める。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は新規本線No.1120を優先したため遡及カーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1120を再取得。
2. **1120件 / chronologicalFrontier 2017-08-21 / 8/21群OPEN** を正本として継続。
3. 次の未処理候補は **「花の慶次 天を穿つ戦槍」No.1121**。正式型式・検定番号・performance core + resetBehavior v0.7を収集する。
4. 続いて **ぱちスロ 仮面ライダーBLACK → 神の左手 悪魔の右目** を処理し、8/21全メーカー横断監査後に群CLOSED可否を判定。
5. イミソーレ3A等の8月候補も別系統カレンダー・型式名・メーカーで境界監査して漏れを防ぐ。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1120 戦国乙女～TYPE-A～
- オリンピア公式製品ページ: https://www.olympia.co.jp/newmachine/ps_son/index.html
- 平和 2017年パチスロ機種一覧: https://www.heiwanet.co.jp/products/pachislot/2017/
- パチビー 新機種発表会: https://www.pachibee.jp/pparticles/view/975
- ニッカンアミューズメント: https://www.nikkansports.com/amusement/pachinko/news/1853734.html
- グリーンべると: https://web-greenbelt.jp/00009761/
- 一撃 機種概要: https://1geki.jp/slot/s_sengokuotome_a/
- 一撃 ボーナス確率: https://1geki.jp/slot/s_sengokuotome_a/1/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_sengokuotome_a/3/
- 一撃 小役/50枚ベース: https://1geki.jp/slot/s_sengokuotome_a/4/
- 一撃 ボーナス概要: https://1geki.jp/slot/s_sengokuotome_a/61/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/42240/
- すろぱちくえすと: https://www.slopachi-quest.com/article/sengokuotome-atype/
- HAZUSE 型式/検定/導入日: https://hazuse.com/machine/pachislot/6S1230/
- 当時導入記事補助: https://slotlog.net/archives/24647732.html
- 中古実機 power-cycle field report: https://jp.mercari.com/item/m92317392292

### 8/21群境界監査
- 2017年導入日順一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 神の左手 悪魔の右目: https://chonborista.com/slot/high-enter/41803/
