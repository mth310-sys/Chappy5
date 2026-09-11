# アナターのオット!?はーです

No: 1366
machineName: アナターのオット!?はーです
machineNameVariants: アナターのオット!?はーです / アナターのオットはーです / ゆるハーデス / S／アナターのオット！？はーです／BR
manufacturer: ミズホ
releaseDate: 2020-09-07
formalModelName: S／アナターのオット！？はーです／BR
certificationNumber: 0S0094

generation: 6号機
systemType: AT / チャレンジ型AT+ゲーム数上乗せAT / 有利区間管理

## identity / release
- HAZUSEで型式 `S／アナターのオット！？はーです／BR`、検定番号 `0S0094`、メーカー「ミズホ」、導入開始2020-09-07を確認。
- 2020-04-10付新潟県公安委員会検定通過資料でも同型式を確認。
- グリーンべると、遊技通信、K-Navi等が2020-09-07ホール導入を一致して掲載。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.3% |
| 3 | 101.4% |
| 4 | 103.0% |
| 5 | 105.1% |
| 6 | 108.2% |
- HAZUSE、イチカツ、すろぱちくえすと等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
AT初当たり合成:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/199.2 |
| 2 | 1/197.2 |
| 3 | 1/194.6 |
| 4 | 1/181.7 |
| 5 | 1/163.4 |
| 6 | 1/162.3 |
- HAZUSE、K-Navi、イチカツ、すろぱちくえすとで一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約39.8G/50枚。
- HAZUSEは46枚あたり約39.8G表記、イチカツ/すろぱちくえすとは50枚あたり約39.8G表記。貸出枚数定義差があるため原文定義を注記し、本DB比較値は攻略資料で一般的な約39.8G/50枚を採用。
- reliability: ANALYSIS_HIGH_WITH_DENOMINATION_NOTE

## netIncrease
- 約2.5枚/G。
- 業界記事、HAZUSE、パチマガスロマガ、P-WORLD等で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- GOD RUSH: 1セット40G+α、純増約2.5枚/G。
- JUDGEMENT: 1セット最大10GのST型ゲーム数上乗せ特化ゾーン。上乗せ成功でSTゲーム数リセット。
- JUDGEMENT平均上乗せ目安: ゆるべろす約20G / ゆるせぽね約40G / ゆるはーです約80G。
- GOD RUSH中JUDGEMENT当選は約1/111。
- 全回転GOD時の期待獲得は約2,070枚の解析/業界紹介あり。これは通常AT基本獲得枚数とは別のプレミアム期待値として保持。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常内部モード: 低確 / 通常 / 天国準備 / 天国。別枠で闇天国あり。
- 有利区間移行後の救済天井: 通常時555G+αで「ゆるちゃれ」当選。
- 闇天国は最大100G+αでJUDGEMENT当選の救済あり。
- ゆるちゃれはキャラ別に成功期待度が異なり、ゆるべろす約20%、ゆるせぽね約50%、ゆるはーです約50%。
- 確定役: GOD 1/6553.6、冥王 1/16384.0、紫7 1/9362.3。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_MODE_DATA
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は内部天井ゲーム数RESET。
- 設定変更後は非有利区間へ移行し、新しい有利区間開始時に通常内部モードと裏キャラモードを抽選。
- 有利区間ランプは消灯。
- 主要朝一解析では「モードは通常以上確定」と整理されている。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は内部天井ゲーム数CARRY_OVER。
- 通常内部モード、裏キャラモード、内部状態、有利区間は基本CARRY_OVERとして朝一解析が一致。
- 朝一有利区間ランプ点灯なら据え置き濃厚。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONでは天井ゲーム数・モード・内部状態・有利区間をCARRY_OVER。
- 朝一解析表では「電源ON・OFF: 天井引き継ぐ / モード引き継ぐ / 有利区間ランプ点灯」と明記。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 内部天井G RESET。
- 据え置き / 純電源OFF→ON: 内部天井G CARRY_OVER。
- 天井は有利区間移行後555G+αでゆるちゃれ。

### ceilingAfterReset
- 設定変更後は0G相当から新しい有利区間を開始し、通常時555G+αでゆるちゃれの救済天井。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間移行時の高モード選択により実質的に早い当選へ寄る可能性はあるが、固定短縮G数とは分離。

### modeAfterReset
- 設定変更後の有利区間移行時は通常内部モードを再抽選。低確は選ばれず通常以上が確定。
- 公開値（設定1）: 通常 約20% / 天国準備 約75% / 天国 約5% / 低確 0%。
- この表は設定変更専用ではなく「非有利区間→有利区間移行時」の共通抽選で、ゆるちゃれ終了後やGOD RUSH終了後の大半にも適用される。
- 同時に裏キャラモードも抽選される。成立役・設定別の詳細表は公開されているが、本DB目的上、朝一比較に必要な存在と再抽選事実のみ保持し全テーブルは収録しない。
- reliability: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 非有利区間を経由し、有利区間移行時に通常内部モード/裏キャラモードを新規構築。
- 据え置き / 純電源OFF→ON: モード・内部状態CARRY_OVER。
- 「状態」のさらに細かな全内部フラグ単位の電断契約は実機完全再現範囲外のため収集しない。

### advantageousSectionReset
- 設定変更: RESET → 非有利区間 → 新有利区間、朝一ランプ消灯。
- 据え置き / 純電源OFF→ON: CARRY_OVER、通常時ランプ点灯状態を基本引継ぎ。
- AT/ゆるちゃれ終了時に区間自体が終了しているケースは朝一判別の例外となるため、ランプだけを100%確定判別にはしない。

### resetBenefits
- 設定変更後の有利区間移行時は低確スタートがなく「通常以上確定」。
- 設定1の公開値では天国準備約75%、天国約5%で、朝一の内部モードは通常時低確スタートより優遇。
- 一律の短縮天井やAT直撃保証は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- `NONE_DIRECTLY_PUBLISHED`。
- 据え置き時のハマリG・高モード等を設定変更すると消去する場合があるが、設定変更固有の定量ペナルティとして公表された値は確認できない。

### resetDetection
- 通常時は有利区間ランプ点灯型。
- 朝一ランプ消灯: 設定変更濃厚。
- 朝一ランプ点灯: 据え置き濃厚。
- 前日が非有利区間で終了していたケースや店側対策など例外があるため「濃厚」で保持し、確定判別にはしない。
- 本機固有のガックン条件・発生率は `アナターのオット!?はーです / ゆるハーデス / S／アナターのオット！？はーです／BR / ミズホ` と `ガックン / リール / 朝一 / 設定変更 / 据え置き` を組み替え、攻略DB・当時解析・後年回顧を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
有利区間移行時の通常内部モード振り分け（設定1）:
| モード | 振り分け |
|---|---:|
| 低確 | 0% |
| 通常 | 約20% |
| 天国準備 | 約75% |
| 天国 | 約5% |
- 設定変更後にも適用される朝一比較値。ただし設定変更専用表ではなく、有利区間移行時共通値。

通常内部モード別ゆるちゃれ出現率の目安:
- 低確 約1/450
- 通常 約1/220
- 天国準備 約1/240
- 天国 約1/45
- 朝一モードの意味を比較する補助値として保持。

## resetBehavior 再探索メモ
2026-09-11。`アナターのオット!?はーです / アナターのオットはーです / ゆるハーデス / S／アナターのオット！？はーです／BR / ミズホ / ユニバーサル` と `設定変更 / リセット / 朝一 / 据え置き / 電源ON OFF / 天井 / モード / 状態 / 裏キャラモード / ガックン / 有利区間 / 有利区間ランプ` を組み替え、メーカー系情報、グリーンべると、遊技通信、HAZUSE、P-WORLD、K-Navi、パチマガスロマガ、1geki、なな徹、イチカツ、すろぱちくえすと、期待値見える化、DMMぱちタウン等を横断。天井RESET/CARRY_OVER、モード再抽選/引継ぎ、非有利区間移行、ランプ判別、有利区間移行時の公開モード値まで固定。本機固有ガックン契約は固定できず推測補完しない。

## conflicts
- baseGamesPer50の分母表記: HAZUSEは「46枚あたり約39.8G」、複数攻略資料は「50枚あたり約39.8G」。貸出表現の定義差を注記し、資料原文を混同しない。
- generation表記: 一部後年資料は6.1号機とするが、HAZUSE、P-WORLD、パチマガスロマガ、当時主要資料は6号機表記。本DBcanonicalは6号機とし、6.1号機表記は世代細分化の参考に留める。

## missingFields
- 本機固有ガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH。
- 設定変更専用に限定された全裏キャラモード振り分け: NOT_STORED_FULL_TABLE（有利区間移行時の存在と朝一重要値は確認済み）。
- 設定変更専用固定短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。

## sources
取得日: 2026-09-11
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/0S0094/
- HAZUSE 内部状態: https://hazuse.com/machine/pachislot/0S0094/genre/209/
- グリーンべると 9/7導入: https://news.p-world.co.jp/articles/14557/greenbelt
- 遊技通信 新台発表: https://news.p-world.co.jp/articles/14329/yugitsushin
- グリーンべると 検定通過: https://news.p-world.co.jp/articles/13302/greenbelt
- K-Navi: https://p-kn.com/slot/3461/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9219
- イチカツ: https://ichikatsu.com/husbandhades/
- すろぱちくえすと 設定: https://www.slopachi-quest.com/article/anata-noottoha-desu-settei/
- すろぱちくえすと 天井: https://www.slopachi-quest.com/article/anata-noottoha-desu-tenjou/
- パチマガスロマガ 基本: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/44/kh01.php
- パチマガスロマガ モード移行: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/44/tj09-2.php
- パチマガスロマガ GOD RUSH: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/44/at02.php
- パチマガスロマガ JUDGEMENT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/44/tk01-4.php
- なな徹 天井: https://nana-press.com/kaiseki/machine/78/1658/
- なな徹 有利区間移行時モード: https://nana-press.com/kaiseki/machine/78/1665/
- 1geki 有利区間/裏キャラ: https://1geki.jp/slot/s_husband_hades/41/
- DMMぱちタウン 朝一: https://p-town.dmm.com/specials/2330
- 期待値見える化: https://slotjin.com/tenjoukitaichi/ottohades/
