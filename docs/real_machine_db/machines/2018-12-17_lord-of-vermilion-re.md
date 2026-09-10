# No.1250 パチスロ ロード オブ ヴァーミリオン Re:

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ ロード オブ ヴァーミリオン Re:
- manufacturer: 七匠（NANASHOW）
- releaseDateCanonical: 2018-12-17
- generation: 6号機
- systemType: AT / 擬似ボーナス型 / 高純増AT
- formalModelNameCanonical: `SATロードオブヴァーミリオンRe:A`
- certificationNumber: `UNVERIFIED_AFTER_RESEARCH`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- 一撃、DMMぱちタウン、すろぱちくえすと、P-WORLD等で2018-12-17導入が一致。
- グリーンべると2018-12-12記事は納品12月16日予定としており、翌17日ホール導入と整合。
- confidence: `ANALYSIS_HIGH_CROSSCHECKED_WITH_CONTEMPORARY_INDUSTRY`。

## identificationEvidence
- 中古実機DBおよびホール導入実機表記で型式 `SATロードオブヴァーミリオンRe:A` を確認。
- 検定通過一覧でも同型式を七匠として確認。
- 検定番号そのものは型式名・メーカー名・公安委員会・検定通過・認定・8S等の検索語を変更して再探索したが直接固定できず、推定せず `UNVERIFIED_AFTER_RESEARCH`。

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 99.5% |
| 3 | 100.9% |
| 4 | 104.3% |
| 5 | 107.5% |
| 6 | 111.5% |

- 一撃、DMM系整理資料、複数解析で一致。

### initialHitBySetting
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/306 |
| 2 | 1/298 |
| 3 | 1/292 |
| 4 | 1/278 |
| 5 | 1/269 |
| 6 | 1/256 |

- 一撃および複数解析で一致。

### baseGamesPer50
- **約50.0G/50枚**。
- 一撃の小役/ベース資料、P-WORLD、複数解析で整合。

### netIncrease
- AT純増: **約5.7枚/G**。
- グリーンべると、P-WORLD、一撃、パチマガスロマガで一致。

### basicPayout
- ヴァーミリオンチャンス（VC）: **15枚ベル5回入賞まで**。実獲得目安は約60枚級。
- ヴァーミリオンBONUS（VB）: **50G / 100G / 150G / 200G**。
- 50G時の純増期待は約280枚級、200Gなら1000枚超級。
- CZ「BATTLE OF LORD」: **5G / BONUS期待度約33%**。
- マナ満タン時BONUS期待度: **25%以上**。

### ceiling
- 有利区間開始後 **1183G+α** で天井。
- ボーナス終了直後基準では、終了後96G消化で有利区間がリセットされるため **1279G+α** 相当。
- 天井恩恵: **ヴァーミリオンBONUS100G以上**。
- 天国/紅蓮王モードでは96G以内のBONUS当選が濃厚。

## modeSpecificMinimumData
- 有利区間開始時に通常モードを決定し、BONUS当選時にも滞在モードに応じて再抽選。
- 天国・紅蓮王モードは96G以内のBONUS当選が濃厚。
- 天国中はマナヘイスト以上で、天国中に自力当選すると次回天国以上ループが確定。
- 通常時はマナ状態、アルカナ状態が存在し、それぞれマナポイント/CZポイント獲得効率へ影響。

## resetBehavior
### settingChangeBehavior
- **天井リセット / 非有利区間から開始 / 通常状態・マナ状態・アルカナ状態を再抽選**。
- 液晶図柄は **1・2・3**、ステージは **キリーク半島**。
- リセット後は非有利区間から始まり、ハズレ以外の小役で約1/1.2で有利区間へ移行。
- 天井カウントは有利区間移行後から開始。
- confidence: `ANALYSIS_HIGH_MACHINE_SPECIFIC_CONTEMPORARY_RESET_TABLE`。

### carryOverBehavior
- 据え置き時は **天井 / 有利区間 / 通常状態 / マナ状態 / アルカナ状態を引き継ぐ**。
- マナポイントも前日から持ち越すとする当時解析があり、宵越しマナポイント狙いが可能とされる。
- confidence: `ANALYSIS_HIGH_MACHINE_SPECIFIC_CONTEMPORARY`。

### powerCycleBehavior
- 当時朝一表では「据え置き 電源ON/OFF時」として、**天井 / 有利区間 / 通常状態 / マナ状態 / アルカナ状態を引き継ぐ**と明記。
- 液晶図柄1・2・3、キリーク半島スタートは設定変更時と同じため、それ単独では変更判別不可。
- confidence: `ANALYSIS_HIGH_MACHINE_SPECIFIC_CONTEMPORARY`。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 純電断: **CARRY_OVER**。
- リセット時天井は有利区間移行後1183G+α。

### ceilingAfterReset
- **1183G+α**。
- 通常のボーナス終了後基準1279G+αより96G分短い見え方になる。
- 天井恩恵はVB100G以上。

### modeAfterReset
- 設定変更後、有利区間移行時に上位モードが優遇。
- **天国: 10%**。
- **天国準備: 20%以上**（初当たり2回以内に天国へ移行するモード）。
- その他の全モード振り分けは完全再現不要のため収集対象外。

### stateAfterReset
- 設定変更後、有利区間移行時:
  - **50%でマナ状態3（マナヘイスト）**。
  - **12.5%でアルカナ状態3**。
- 据え置き / 純電断では各状態を引き継ぐ。

### advantageousSectionReset
- 設定変更: **非有利区間へ移行**。
- 据え置き / 純電断: **有利区間を引き継ぐ**。
- 設定変更後はハズレ以外の小役で約1/1.2で有利区間へ移行。

### resetBenefits
- 天国10%。
- 天国準備20%以上。
- マナ状態3 50%。
- アルカナ状態3 12.5%。
- 一方、当時攻略評価では「リセット狙い目無し」とされ、恩恵はあるが単独狙いとして強くない位置づけ。

### resetPenalties
- **前日天井G数・有利区間・マナポイント等の蓄積を消去する点が据え置き比で不利**。
- それ以外のリセット専用ペナルティ数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- ガックン判別: 当時解析では **ほぼ不可能**。
- 当日データ表示で**約1200G到達**ならリセット濃厚材料。
- 朝一数Gでマナヘイスト発生なら設定変更/リセット可能性UP。ただし自力移行があるため確定ではない。
- 液晶1・2・3 / キリーク半島は両条件で同じため単独判別不可。

### numericResetData
- resetCeiling: **1183G+α after advantageous-section entry**
- normalPostBonusCeiling: **1279G+α from bonus end display basis**
- resetTenjoMode: **10%**
- resetTenjoPreparationMode: **20%以上**
- resetManaState3: **50%**
- resetArcanaState3: **12.5%**
- advantageousSectionEntryAfterReset: **約1/1.2 on non-miss small role**
- gakkun: **ほぼ判別不可能**
- resetSpecificMorningHitRate: `NONE_CONFIRMED_AS_SINGLE_COMPARABLE_RATE`

## conflictsAndQualityNotes
- 主要性能コア（機械割、AT初当たり、純増、ベース）は複数解析で一致し、重大CONFLICTなし。
- 型式 `SATロードオブヴァーミリオンRe:A` は複数系統で確認できるが、検定番号は十分な再探索後も直接確認できずUNVERIFIED。
- 「リセット後1183G+α」と「ボーナス終了後1279G+α」は競合ではなく、有利区間開始位置の違いによる定義差。
- 朝一リセット表が「据え置き 電源ON/OFF時」を同一列で扱うため、本レコードではその資料定義を明示した上でpowerCycleBehaviorにも採用。

## missingFields
- certificationNumber。
- リセット時の全モード振り分け（物差しDBでは不要）。
- ガックンの物理的発生条件・確率（当時資料では実用判別ほぼ不可能まで確認）。

## sources
取得日: 2026-09-10

1. グリーンべると — https://web-greenbelt.jp/00010938/ — 2018-12-12、七匠6号機AT、純増約5.7枚/G、VB50〜200G、VCベル5回、CZ約33%、天国96G、納品12/16予定 — reliability: `CONTEMPORARY_INDUSTRY`
2. 一撃 — https://1geki.jp/slot/s_lov_re/ — 導入2018-12-17、設定別AT初当たり/出玉率、純増、AT基本性能 — reliability: `CONTEMPORARY_ANALYSIS_HIGH`
3. 一撃 小役/ベース — https://1geki.jp/slot/s_lov_re/4/ — 約50.0G/50枚 — reliability: `CONTEMPORARY_ANALYSIS_HIGH`
4. すろぱちくえすと 朝一リセット — https://www.slopachi-quest.com/article/lord-of-vermilion-re-reset/ — 設定変更/据え置き・電源ON/OFF別の天井、有利区間、通常/マナ/アルカナ状態、液晶/ステージ、ガックン、リセット恩恵数値、マナポイント持越し — reliability: `CONTEMPORARY_ANALYSIS_HIGH_MACHINE_SPECIFIC`
5. DMMぱちタウン — https://p-town.dmm.com/machines/3324 — 天井1183G+α/1279G+α、VB100G以上、天国10%、天国準備20%以上、マナヘイスト50%、アルカナ状態C12.5% — reliability: `ANALYSIS_HIGH`
6. P-WORLD — https://www.p-world.co.jp/machine/database/8813 — 七匠、6号機AT、純増約5.7枚/G、VC/VB/CZ仕様 — reliability: `MACHINE_DATABASE_HIGH`
7. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/nanashow_slot/11/a.php — 七匠2018年12月、6号機AT、純増5.7枚/G、VB/VC仕様 — reliability: `CONTEMPORARY_ANALYSIS_HIGH`
8. スロ安サーチ — https://slot-price.com/slot_price_details/id/1295 — 型式 `SATロードオブヴァーミリオンRe:A`、導入2018-12-17 — reliability: `SECONDARY_MACHINE_DATABASE`
9. すろ・ぱち(解) 検定通過情報 — https://kaiseki.sulopachinews.com/archives/2352 — `SATロードオブヴァーミリオンRe:A（七匠）` — reliability: `SECONDARY_ARCHIVE`
10. 2018年12月新台一覧 — https://www.slopachi-quest.com/article/erunote-12-shindai/ — 12月導入群境界監査 — reliability: `CONTEMPORARY_CALENDAR`
11. 一撃 2018年12月スケジュール — https://1geki.jp/newmachinecalender/201812/ — 12/17に本機およびアナザーゴッドハーデス-冥王召喚-を掲載 — reliability: `CALENDAR_DATABASE`

## nextQueueContext
- 2018-12-04〜2018-12-16: 当時12月新台一覧と複数カレンダーで新規パチスロの固定候補なし。境界監査済み。
- 2018-12-17群はOPEN。
- 同日候補として少なくとも以下を保持:
  1. 回胴黙示録カイジ4 /ZS（サミー）
  2. アナザーゴッドハーデス-冥王召喚-（ミズホ）
- 次回はNo.1251候補として、同日群の導入日・既存重複を再確認したうえで最古未処理を処理する。
