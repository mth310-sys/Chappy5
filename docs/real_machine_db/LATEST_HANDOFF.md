更新日: 2026-09-09

## 現在地点
- recordCount: **1122**
- latestRecordAdded: **ぱちスロ 仮面ライダーBLACK**（京楽産業.）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08-21_pachislot-kamen-rider-black.md`
- chronologicalFrontier: **2017-08-21**
- frontierLatestMachine: **ぱちスロ 仮面ライダーBLACK — No.1122**
- schema: **resetBehavior v0.7**
- status: **2017-08-21_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainのREADME、mission v0.7、INDEX、LATEST_HANDOFF、No.1121「戦国パチスロ花の慶次～天を穿つ戦槍～」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおりLATEST_HANDOFF＋実レコードを進捗正本として採用。
- 開始時mainは **1121件 / chronologicalFrontier 2017-08-21 / 8/21群OPEN**。
- HANDOFF最優先の次機種 **「ぱちスロ 仮面ライダーBLACK」** をNo.1122としてperformance core + resetBehavior v0.7で登録。
- 京楽公式2017-08-07告知、京楽発表を伝える2017-06-29業界記事、パチビー/K-Navi/一撃等で2017-08-21導入を固定。
- 型式名 **パチスロ仮面ライダーBLACKKB** は中古実機流通資料2系統で確認。検定番号は表記揺れ・KB・京楽・回胴式遊技機・7S0x等へ検索拡張後も直接固定できず UNVERIFIED_AFTER_RESEARCH。
- resetBehaviorは一撃の設定変更/電源OFF→ON直接表、期待値見える化の同表、月/太陽レベルの公開数値を採用。実戦値のリセット後ゾーン約1.4倍は解析確定値と分離保存。

## No.1122 — ぱちスロ 仮面ライダーBLACK
- manufacturer: **京楽産業.（KYORAKU）**
- releaseDate canonical: **2017-08-21**
- formalModelName: **パチスロ仮面ライダーBLACKKB**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / ART / CZ / 周期抽選 / ボーナス非搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.5 / 97.8 / 100.3 / 103.8 / 106.5 / 112.0%**。
- ART初当たり: **1/495.1 / 489.7 / 453.5 / 430.8 / 411.2 / 368.2**。
- CZ合算: **1/197.4 / 195.7 / 178.9 / 168.6 / 160.9 / 144.7**。
- ベース: **約46.5G/50枚**。
- ART純増: **約2.0枚/G**。
- ART「ライジングRUSH」初期G数: **40G or 100G + α**。
- 通常天井: **ART間1280GでART当選**。

### resetBehavior v0.7
- settingChange: **天井RESET / 内部状態再抽選 / 月レベル・太陽レベル再抽選 / 埠頭ステージ**。
- pure power OFF→ON: **天井・内部状態・月レベル・太陽レベルCARRYOVER / 埠頭ステージ**。
- explicit stay-setting contract: 純電断表から推測転記せず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の月レベル・太陽レベルは両方とも **Lv2 50% / Lv3 25% / Lv4 15% / Lv5 10% / Lv1 0%**。
- 通常の周期CZ「創世ゾーン」チェックポイント: **100 / 300 / 500 / 700 / 900 / 1100G**。
- 固定の設定変更専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット後は両レベルLv2以上により周期CZ/ART期待度が優遇。新台初日実戦集計の「通常平均比約1.4倍」は `OBSERVATIONAL_RESET_ZONE_UPLIFT` として解析確定値から分離。
- 設定変更時の低確/通常/高確等の具体的状態振り分けは検索拡張後も **UNVERIFIED_AFTER_RESEARCH_FOR_NUMERIC_STATE_DISTRIBUTION**。
- ガックン判別: **不可**とする当時解析あり。設定変更/純電断とも埠頭ステージのためステージ単独でも判別不可。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-08-21群監査 — OPEN
- 登録済み: **No.1118 イノキロードトゥゴッド / No.1119 パチスロ ロボットガールズZ / No.1120 戦国乙女～TYPE-A～ / No.1121 戦国パチスロ花の慶次～天を穿つ戦槍～ / No.1122 ぱちスロ 仮面ライダーBLACK**。
- 同日未処理候補: **神の左手 悪魔の右目**。
- ALL7の同日「めぞん一刻～約束～」はパチンコ `CRめぞん一刻4 約束` のため本パチスロDB対象外。
- イミソーレ3A等の8月候補は日付を個別資料で再監査してから群へ含める。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は新規本線No.1122を優先したため遡及カーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1122を再取得。
2. **1122件 / chronologicalFrontier 2017-08-21 / 8/21群OPEN** を正本として継続。
3. 次の未処理候補は **「神の左手 悪魔の右目」No.1123**。正式型式・検定番号・performance core + resetBehavior v0.7を収集する。
4. その後、8/21全メーカー横断監査を実施し、群CLOSED可否を判定。
5. イミソーレ3A等の8月候補も別系統カレンダー・型式名・メーカーで境界監査して漏れを防ぐ。
6. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1122 ぱちスロ 仮面ライダーBLACK
- KYORAKU公式 NEWS（2017-08-07）: https://www.kyoraku.co.jp/news/detail/145
- パチ7 / プレイグラフ 京楽発表記事（2017-06-29）: https://pachiseven.jp/news/index/page%3A64
- グリーンべると / P-WORLD 業界記事（2017-06-29）: https://news.p-world.co.jp/articles/9422/greenbelt
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/8450
- パチビー: https://www.pachibee.jp/movies/index/13963
- K-Navi: https://p-kn.com/slot/2843/
- 一撃 機種トップ: https://1geki.jp/slot/s_kamenrider_black/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_kamenrider_black/3/
- 一撃 月/太陽レベル: https://1geki.jp/slot/s_kamenrider_black/46/
- 一撃 設定判別/朝一: https://1geki.jp/slot/s_kamenrider_black/5/
- 一撃 50枚ベース: https://1geki.jp/slot/s_kamenrider_black/4/
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/42116/
- 期待値見える化 リセット: https://slotjin.com/slot/kamenrider-black-reset/
- pacnk 設定判別/スペック: https://pacnk.com/slot/tools/sh_kamenraidaburakku.html
- 中一商事 型式名: https://www.nakaiti.com/html/sKyoraku008.html
- Yahoo!ショッピング 中一商事 型式名: https://store.shopping.yahoo.co.jp/nakaiticom/20216.html
