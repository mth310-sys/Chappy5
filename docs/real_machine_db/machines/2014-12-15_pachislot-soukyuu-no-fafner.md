# パチスロ 蒼穹のファフナー

machineName: パチスロ 蒼穹のファフナー
manufacturer: SANKYO
releaseDate: 2014-12-15
releaseDatePrecision: multi_source_hall_start
generation: 5号機
systemType: ART / CZ / ゲーム数管理 / 疑似ボーナス
modelName: パチスロ 蒼穹のファフナーA
inspectionNumber: 4S0874
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_CONFLICTS

## identity

- SANKYO製5号機ART。K-Navi、HAZUSE、当時解析でホール導入開始 **2014-12-15** が一致。
- 型式名 **パチスロ 蒼穹のファフナーA**、検定番号 **4S0874** はHAZUSEで確認。
- 後継6号機「蒼穹のファフナーEXODUS」（2019）とは別機種として分離。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_DATE / ANALYSIS_HIGH_FOR_MODEL_ID

## payoutRateBySetting

### canonical

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 98.7% |
| 3 | 99.9% |
| 4 | 103.9% |
| 5 | 106.8% |
| 6 | 110.2% |

- K-Navi、HAZUSE、PachiNaviで一致するためcanonical。
- 別二次資料では **97.6 / 98.7 / 100.1 / 102.7 / 106.6 / 110.7%** が掲載されているため、平均せず `CONFLICT_PAYOUT_RATE_SECONDARY_SERIES` として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_WITH_SECONDARY_CONFLICT

## initialHitBySetting

### ART「蒼穹作戦」初当たり

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/258 |
| 2 | 1/243 |
| 3 | 1/232 |
| 4 | 1/212 |
| 5 | 1/199 |
| 6 | 1/194 |

- K-Navi / HAZUSE / 複数二次資料で整合。
- CZ「乙姫覚醒ゾーン」: 1/141 → 1/114、Vバトル: 1/710 → 1/493。初当たり構造比較用の補助値として保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- canonical候補: **約32G / 50枚**（HAZUSE）。
- 別二次資料に **約31G / 50枚** があるため `CONFLICT_BASE_GAMES_PER_50_31_VS_32`。
- 平均化しない。
- confidence: CONFLICT_ANALYSIS_SOURCES

## netIncrease

- ART「蒼穹作戦」: **純増約2.2枚/G**。
- K-Navi、当時解析、複数資料で整合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART「蒼穹作戦」はゲーム数上乗せ型。
- 乙姫覚醒ゾーン成功時は「乙姫チャンス / SUPER乙姫チャンス」で初期ゲーム数を獲得。平均上乗せは約60G / 約120G。
- Vバトル勝利もART突入契機。
- ART中に疑似ボーナス「蒼穹BONUS」を搭載。
- 実機完全再現用の上乗せ詳細振り分けは収集対象外。

## modeSpecificMinimumData

- ART及びVバトル間の通常最大天井: **999G**。
- 天井到達時は **ARTまたはVバトル** に当選。Vバトル当選のみではART確定ではない。
- ART当選またはVバトル当選で天井ゲーム数がリセットされる。
- ARTモード / Vバトルモードに天国があり、天国滞在時は100G以内の当選が濃厚。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: HIGH_FOR_SETTING_CHANGE_CORE / ANALYSIS_SINGLE_FOR_PUBLIC_RESET_PERCENTAGES / UNVERIFIED_FOR_CARRYOVER_AND_POWER_CYCLE
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- HAZUSEの本機ページが **設定変更時は天井までのゲーム数をリセット、内部モード・内部状態を再抽選、竜宮島ステージから開始** と明記。
- confidence: ANALYSIS_HIGH_DIRECT_MACHINE_PAGE

### carryOverBehavior

- 据え置き時のゲーム数・ARTモード・Vバトルモード・内部状態を一括で明示した本機固有の直接表を、表記揺れ・型式名・メーカー名を含む再探索後も固定できず。
- `UNVERIFIED_AFTER_RESEARCH`。設定変更時RESETの反対挙動として推定しない。

### powerCycleBehavior

- 設定変更なしの純粋な電源OFF→ON時について、天井G・モード・内部状態を明示した2014年機固有の直接契約は今回固定できず。
- `UNVERIFIED_AFTER_RESEARCH`。2019年「EXODUS」の電断仕様は別機種のため流用しない。

### gameCounterReset

- 設定変更時: **RESET**。
- 据え置き / power cycle: **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE

### ceilingAfterReset

- 設定変更で通常の天井進捗はリセット。
- 固定一律の「リセット後○G短縮天井」は今回確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし設定変更時の天国移行が存在するため、モード再抽選由来の早期当選恩恵とは区別する。

### modeAfterReset

- 設定変更時: **内部モード再抽選**（HAZUSE）。
- 後年整理された当時解析系二次資料に **設定変更時20%で天国移行** の公開値あり。
- この20%は今回独立した高信頼二次資料で再照合できなかったため、`PUBLIC_RESET_NUMBER_ANALYSIS_SINGLE` として保持しcanonical化しない。

### stateAfterReset

- 設定変更時: **内部状態再抽選**（HAZUSE）。
- 二次解析資料に **設定変更時60%で高確移行** の公開値あり。
- 独立再照合未達のため `PUBLIC_RESET_NUMBER_ANALYSIS_SINGLE`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更後はモード・状態が再抽選される。
- 公開二次値では天国20%、高確60%という朝一優遇が示されるが、単一系列のため信頼度を分離。
- 固定短縮天井は確認できない。

### resetPenalties

- 設定変更専用の独立した冷遇数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 据え置き進捗消失との比較は、据え置き直接契約が未固定なので推定しない。

### resetDetection

- HAZUSEでは設定変更後の液晶開始ステージが **竜宮島ステージ**。
- ただし据え置き・純電断時の開始ステージとの比較契約を固定できていないため、竜宮島ステージ単独を変更確定材料にはしない。
- 本機固有のガックン契約は検索語変更後も `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定変更時天国移行: **20%** — ANALYSIS_SINGLE_SECONDARY / corroboration pending。
- 設定変更時高確移行: **60%** — ANALYSIS_SINGLE_SECONDARY / corroboration pending。
- 固定短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。

### publicMorningNumbers

- 朝一比較可能値として20%天国 / 60%高確の二次解析値を保存するが、単一系列につきcanonical値とは扱わない。

## resetBehavior 再探索メモ

取得日: 2026-09-07

- 表記揺れ: `パチスロ 蒼穹のファフナー / 蒼穹のファフナー Dead Aggressor / パチスロ蒼穹のファフナーA / 4S0874 / SANKYO`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / 状態 / 高確 / 天国 / ガックン / 50枚 / 1000円 / ベース`。
- 資料系統: HAZUSE、K-Navi、パチ＆スロ必勝本、当時攻略記事、後年解析整理資料。
- 2019年6号機「蒼穹のファフナーEXODUS」の設定変更/電断/有利区間情報は別機種として除外。

## sources

取得日: 2026-09-07

1. HAZUSE 機種トップ/基本/設定変更: https://hazuse.com/machine/pachislot/4S0874/
2. HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/4S0874/genre/201/
3. K-Navi 機種トップ: https://p-kn.com/slot/2158/
4. パチ＆スロ必勝本 乙姫覚醒抽選: https://p.hisshobon.jp/machine/2498/1/50326
5. 2014年当時天井解析: https://mezase20.com/fafner.html
6. 2014年当時/後年整理 天井解析: https://www.slopachi-quest.com/article/fafner-in-the-azure-tenzyou/
7. 設定変更時20%天国・60%高確の二次整理: https://rakuslo.com/fafner-setteisa.html
8. PachiNavi 基本スペック: https://pachinavi.net/machines/fafner-1/
9. みんスロ（二次比較値）: https://minslo.com/%E8%92%BC%E7%A9%B9%E3%81%AE%E3%83%95%E3%82%A1%E3%83%95%E3%83%8A%E3%83%BC/

## missingFields

- 据え置き時のゲーム数/モード/状態の本機固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更なし電源OFF→ONの本機固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン/据え置きとのステージ比較: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更時20%天国・60%高確の独立再照合: PENDING_QA

## conflicts

- `CONFLICT_PAYOUT_RATE_SECONDARY_SERIES`
  - canonical: 97.8 / 98.7 / 99.9 / 103.9 / 106.8 / 110.2% — K-Navi / HAZUSE / PachiNavi。
  - secondary: 97.6 / 98.7 / 100.1 / 102.7 / 106.6 / 110.7% — みんスロ。
- `CONFLICT_BASE_GAMES_PER_50_31_VS_32`
  - 約32G: HAZUSE。
  - 約31G: みんスロ。
