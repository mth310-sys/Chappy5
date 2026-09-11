# パチスロ 花伝-30

recordNo: 1329
machineName: パチスロ 花伝-30
machineNameVariants: 花伝-30 / 花伝30 / S花伝M9-30 / HANADEN-30
manufacturer: アムテックス（総販売元: HEIWA）
formalModel: S花伝M9-30
certificationNumber: 9S1503
releaseDate: 2020-01-20
releaseDateNote: パチ7の30φ専用機種ページで2020-01-20導入開始予定を確認。後年の中古実機資料に2020-01-27表記もあるが、当時機種ページを優先して2020-01-20をcanonicalとし、後年単一資料の1/27は日付差資料として保持する。
generation: 6号機
systemType: AT / CZ経由型 / 4リール / 30φ

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.8% |
| 3 | 100.5% |
| 4 | 103.5% |
| 5 | 106.2% |
| 6 | 110.1% |

パチ7の30φ専用ページで確認。25φ「S花伝M4」と同一数値で、同ページは内部システムが25φと全く同じと明記。

信頼度: ANALYSIS_HIGH_DIRECT_30PHI

## initialHitBySetting

| 設定 | AT初当り | CZ出現率 |
|---|---:|---:|
| 1 | 1/845（精密値1/844.8） | 1/98（精密値1/97.9） |
| 2 | 1/811（1/810.5） | 1/95（1/95.0） |
| 3 | 1/775（1/774.7） | 1/92（1/92.0） |
| 4 | 1/715（1/714.9） | 1/89（1/89.2） |
| 5 | 1/684（1/684.0） | 1/88（1/87.5） |
| 6 | 1/628（1/628.3） | 1/83（1/82.7） |

30φ専用ページの丸め値を直接確認。精密値は同一内部システムの25φ解析および後年30φ設定DBで一致確認。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約35.9G/50枚。

30φ専用ページで直接確認。

信頼度: ANALYSIS_HIGH_DIRECT_30PHI

## netIncrease

- AT純増: 約6.2枚/G。

30φ専用ページで直接確認。

信頼度: ANALYSIS_HIGH_DIRECT_30PHI

## basicPayout

- AT「五光降臨」: ベルナビ20回、約220枚。
- 終了後は30G継続の「こいこいタイム」へ移行。
- 乱舞ボーナス: ベルナビ10回、約110枚。
- 五光降臨突入時の平均獲得は約1100枚と当時機種紹介に記載。

信頼度: ANALYSIS_HIGH_DIRECT_30PHI

## modeSpecificMinimumData

- 通常時はCZ「猪鹿蝶チャンス」を主経路としてATを目指す。通常時からAT直撃も存在。
- ゲーム数救済CZ: 100G以内CZ非当選なら100GでCZ、300Gで第1天井CZ、700G+αで高期待度CZ。
- 同一有利区間内のCZ失敗回数天井: 6回 7.8% / 10回 91.8% / 14回 0.4%。実質7・11・15回目CZでAT濃厚。
- 700G天井CZ失敗時は有利区間RESET。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 天井までの内部ゲーム数: **RESET**。
- CZ失敗回数: **RESET**。
- 内部モード: **RESET / 再抽選**。
- 内部状態: 当時解析ではリセット扱い。
- 有利区間: **RESET**。
- 有利区間ランプ: **消灯**。

30φ専用ページが「内部システムは25パイと全く同じ」と明記するため、25φ型式S花伝M4の当時HAZUSE設定変更表を30φにも適用可能な共通内部契約として採用。ただし型式自体は別レコードとして保持する。

信頼度: ANALYSIS_HIGH_CROSS_VARIANT_EXPLICIT_SAME_INTERNAL_SYSTEM

### carryOverBehavior

- 設定変更なし据え置きでは、天井までの内部ゲーム数・CZ失敗回数・内部モード・有利区間を引き継ぐ。
- 有利区間ランプが点灯していれば据え置き濃厚。ただしホール側対策等の例外があるため確定判別とはしない。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### powerCycleBehavior

- 電源OFF→ONのみ: **天井までの内部ゲーム数を引き継ぐ**。
- CZ失敗回数: **引き継ぐ**。
- 内部モード: **引き継ぐ**。
- 内部状態: **引き継ぐ**とする解析表あり。
- 有利区間ランプ: **状態を引き継ぐ**。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### gameCounterReset

- 設定変更: RESET。
- 据え置き / 電源OFF→ONのみ: CARRY_OVER。
- データカウンターはCZをREGとして数えてリセットするホールが多く、内部AT間ゲーム数とは一致しない場合があるため、客AIではリール下7セグ等の内部進行表示と分離して扱う。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset

- 設定変更専用の一律短縮天井は確認できず。
- 共通救済として100G以内CZ非当選時は100GでCZ、300GでCZ、700G+αで高期待度CZ。
- これらは設定変更専用恩恵ではなく通常の有利区間内救済契約として分離する。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset

- 設定変更: **内部モードRESET / 再抽選**。
- 据え置き / 電源OFF→ONのみ: **内部モード引継ぎ**。
- 設定変更専用の公開モード振り分け数値は、表記揺れ・型式名・メーカー名とリセット/朝一/モード振り分けを組み替えて再探索したが固定できず、推測補完しない。

信頼度: ANALYSIS_HIGH_FOR_CONTRACT / UNVERIFIED_FOR_RESET_ONLY_DISTRIBUTION

### stateAfterReset

- 設定変更: 内部状態RESET。
- 据え置き / 電源OFF→ONのみ: 内部状態引継ぎ。
- 設定変更専用の状態振り分け公開数値は固定できず。

信頼度: ANALYSIS_HIGH_FOR_CONTRACT / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset

- 設定変更: **有利区間RESET**。
- AT「こいこいタイム」終了後、および700G天井CZ失敗後も有利区間RESET。
- 据え置き / 電源OFF→ONのみ: 有利区間状態を引き継ぐ。
- 有利区間RESET後は平均約2Gで再度有利区間へ移行するとの解析記載あり。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

### resetBenefits

- 設定変更専用の明確な短縮天井や専用高モード移行率は確認できず。
- 有利区間が新規開始となるためCZ失敗回数・内部モードは再抽選されるが、通常時共通救済の100/300/700G CZを「リセット専用恩恵」とは扱わない。

### resetPenalties

- 設定変更専用の主要な不利抽選は公開確認できず。
- 前日の天井進行・CZ失敗回数・内部モードを失うことはRESET契約そのものとして保存し、専用ペナルティとは区別する。

### resetDetection

- **有利区間ランプ消灯なら設定変更濃厚、点灯なら据え置き濃厚**という当時解析あり。
- ホール側が対策している可能性があるため「確定」にはしない。
- 本機30φ固有のガックン発生条件・発生率は、`花伝-30 / 花伝30 / S花伝M9-30 / アムテックス / HEIWA` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 有利区間` を組み替えて再探索したが、公開確定値を固定できず推測補完しない。

信頼度: ANALYSIS_HIGH_FOR_LAMP / UNVERIFIED_FOR_GAKKUN

### numericResetData / publicMorningNumbers

- CZ失敗回数天井振り分け（有利区間移行時共通）: 6回 7.8% / 10回 91.8% / 14回 0.4%。
- 有利区間RESET後の再移行: 平均約2G。
- 設定変更専用モード振り分け: PUBLIC_RESET_ONLY_MODE_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH。
- 朝一特定G以内当選率: PUBLIC_RESET_ONLY_EARLY_HIT_RATE_NOT_FOUND_AFTER_RESEARCH。
- ガックン発生率: PUBLIC_GAKKUN_VALUE_NOT_FOUND_AFTER_RESEARCH。

※失敗回数天井振り分けと平均約2G再移行は「設定変更専用率」ではなく、有利区間移行時共通値として保存。

## resetBehavior 再探索メモ

2026-09-11に `パチスロ 花伝-30 / 花伝-30 / 花伝30 / S花伝M9-30 / 花伝 / S花伝M4 / アムテックス / HEIWA` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / CZ回数 / モード / 内部状態 / 有利区間 / ランプ / ガックン / 変更判別` を組み合わせ、パチ7 30φ専用ページ、遊技通信検定通過、HAZUSE、ちょんぼりすた、後年設定DBを横断。30φページが25φと内部システム完全同一と明記するため、25φ当時解析のreset契約を別型式30φに共通適用した。設定変更専用モード振り分け・朝一早当たり率・本機固有ガックン率は十分再探索後も固定できず推測補完しない。

## sources

取得日: 2026-09-11

1. パチ7 — 花伝-30（30φ専用機種ページ）
   - https://pachiseven.jp/machines/5957
   - 導入日、メーカー、6号機AT、純増、設定別初当り/CZ/出玉率、35.9G/50枚、基本AT性能、25φと内部システムが全く同じとの記載を確認。
   - reliability: ANALYSIS_HIGH
2. 遊技通信web — 東京都公安委員会検定通過状況（2020-01-14）
   - https://www.yugitsushin.jp/news/maker/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%881%E6%9C%8814%E6%97%A5%EF%BC%89-2/
   - 型式S花伝M9-30、検定番号9S1503、アムテックスを確認。
   - reliability: INDUSTRY
3. HAZUSE — パチスロ 花伝（25φ S花伝M4）
   - https://hazuse.com/machine/pachislot/9S1112/
   - 精密AT/CZ値、機械割、型式・検定番号を照合。
   - reliability: ANALYSIS_HIGH
4. HAZUSE — 花伝 天井・設定変更
   - https://hazuse.com/machine/pachislot/9S1112/genre/207/
   - 設定変更/電源ON-OFF時の天井・有利区間ランプ・CZ回数・内部モードのRESET/CARRY_OVER、CZ失敗回数天井振り分けを確認。
   - reliability: ANALYSIS_HIGH
5. ちょんぼりすた — 花伝
   - https://chonborista.com/slot/amute/99069/
   - 導入日、基本スペック、CZ救済、朝一設定変更/電源OFF→ON、有利区間RESETタイミングを照合。
   - reliability: ANALYSIS_HIGH
6. pacnk — S花伝 30φ 設定判別ツール
   - https://pacnk.com/slot/tools/sh_hanadensanjupai.html
   - 30φの精密AT初当り/CZ/出玉率を後年DBで照合。
   - reliability: ANALYSIS_SINGLE_SUPPORT

## missingFields

- 30φ型式固有の設定変更専用モード振り分け公開値。
- 30φ型式固有の朝一特定G以内当選率。
- 30φ型式固有のガックン発生条件・発生率。

## conflicts

- releaseDate: 当時パチ7 30φ専用ページは2020-01-20導入開始予定、後年中古実機ページには2020-01-27表記あり。当時専用資料を優先し2020-01-20をcanonical。後年単一中古資料の1/27は `CONFLICT_RELEASE_DATE_LOW_AUTHORITY_2020_01_27` として注記し、平均化しない。

## status

coreStatus: COMPLETE_CORE
resetBehaviorStatus: COMPLETE_PUBLIC_RESET_CORE
confidence: ANALYSIS_HIGH_WITH_INDUSTRY_MODEL_CONFIRMATION
