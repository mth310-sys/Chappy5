# パチスロ 花伝

recordNo: 1332
machineName: パチスロ 花伝
machineNameVariants: 花伝 / HANADEN / S花伝M4
manufacturer: アムテックス（総販売元: HEIWA）
formalModel: S花伝M4
certificationNumber: 9S1112
releaseDate: 2020-01-20
generation: 6号機
systemType: AT / CZ経由型 / 4リール / 25φ

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.8% |
| 3 | 100.5% |
| 4 | 103.5% |
| 5 | 106.2% |
| 6 | 110.1% |

## initialHitBySetting
| 設定 | AT初当り | CZ |
|---|---:|---:|
| 1 | 1/844.8 | 1/97.9 |
| 2 | 1/810.5 | 1/95.0 |
| 3 | 1/774.7 | 1/92.0 |
| 4 | 1/714.9 | 1/89.2 |
| 5 | 1/684.0 | 1/87.5 |
| 6 | 1/628.3 | 1/82.7 |

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約35.9G/50枚。

## netIncrease
- AT純増: 約6.2枚/G。

## basicPayout
- AT「五光降臨」: ベルナビ20回、約220枚。
- 乱舞ボーナス: ベルナビ10回、約110枚。
- 五光降臨終了後は30Gの「こいこいタイム」。五光降臨突入時の平均獲得約1100枚とする機種紹介あり。

## modeSpecificMinimumData
- CZ「猪鹿蝶チャンス」を主経路にATを目指す。
- 共通救済CZ: 100G以内CZ非当選時100G、300G、700G+α。
- 同一有利区間内CZ失敗回数天井: 6回7.8% / 10回91.8% / 14回0.4%。
- 700G天井CZ失敗後は有利区間RESET。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 天井までのゲーム数: **RESET**。
- CZ失敗回数: **RESET**。
- 内部モード: **RESET / 再抽選**。
- 内部状態: **RESET**。
- 有利区間: **RESET**。
- 有利区間ランプ: **消灯**。

### carryOverBehavior
- 据え置きでは天井ゲーム数・CZ失敗回数・内部モード・内部状態・有利区間を引き継ぐ。

### powerCycleBehavior
- 電源OFF→ONのみ: **天井ゲーム数 / CZ失敗回数 / 内部モード / 内部状態 / 有利区間ランプ状態を引き継ぐ**。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 電源OFF→ONのみ: CARRY_OVER。

### ceilingAfterReset
- 設定変更専用の一律短縮天井は確認できず。
- 100G/300G/700G+αの救済CZは通常有利区間の共通契約で、リセット専用恩恵とは区別する。

### modeAfterReset
- 設定変更: 内部モードRESET / 再抽選。
- 据え置き / 電源OFF→ONのみ: CARRY_OVER。
- 設定変更専用モード振り分け数値は十分再探索後も公開確定値を固定できず推測補完しない。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 電源OFF→ONのみ: CARRY_OVER。
- 設定変更専用の状態振り分け数値は公開確定値を固定できず。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- AT終了後、および700G天井CZ失敗後も有利区間RESET。
- 据え置き / 電源OFF→ONのみ: CARRY_OVER。
- 有利区間RESET後は平均約2Gで再移行との解析あり。

### resetBenefits
- 設定変更専用の短縮天井・専用高モード移行率は確認できず。
- CZ失敗回数/内部モードが新規抽選になることはRESET契約として保存。

### resetPenalties
- 設定変更専用の主要ペナルティ抽選は確認できず。
- 前日の天井進行・CZ失敗回数・内部モードを失う点はRESET契約として扱う。

### resetDetection
- **有利区間ランプ消灯＝設定変更濃厚、点灯＝据え置き濃厚**。
- ホール側の対策等を考慮し確定扱いにはしない。
- 本機固有ガックン発生条件/率は十分再探索後も公開確定値を固定できず推測補完しない。

### numericResetData / publicMorningNumbers
- CZ失敗回数天井振り分け（有利区間移行時共通）: 6回7.8% / 10回91.8% / 14回0.4%。
- 有利区間RESET後の再移行: 平均約2G。
- 設定変更専用モード振り分け / 朝一特定G以内当選率 / ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## resetBehavior 再探索メモ
2026-09-11に `パチスロ 花伝 / 花伝 / S花伝M4 / アムテックス / HEIWA` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / CZ回数 / モード / 内部状態 / 有利区間 / ランプ / ガックン` を組み合わせ、HAZUSE、ちょんぼりすた、パチ7、検定通過資料を横断。主要RESET/CARRY_OVER契約は固定。設定変更専用振り分けとガックン率は公開確定値なし。

## sources
取得日: 2026-09-11

1. HAZUSE — パチスロ 花伝
   - https://hazuse.com/machine/pachislot/9S1112/
   - 型式S花伝M4、検定番号9S1112、2020-01-20導入、設定別AT/CZ/機械割、純増を確認。
   - reliability: ANALYSIS_HIGH
2. グリーンべると — 広島県検定情報
   - https://web-greenbelt.jp/00011606/
   - S花伝M4 / アムテックス / 9S1112を確認。
   - reliability: INDUSTRY
3. HAZUSE — 天井・設定変更
   - https://hazuse.com/machine/pachislot/9S1112/genre/207/
   - 設定変更/電源ON-OFFの天井・有利区間ランプ・CZ回数・内部モード、CZ失敗回数天井を確認。
   - reliability: ANALYSIS_HIGH
4. ちょんぼりすた
   - https://chonborista.com/slot/amute/99069/
   - 設定別性能、35.9G/50枚、純増6.2枚/G、朝一挙動、有利区間RESETタイミングを照合。
   - reliability: ANALYSIS_HIGH
5. パチ7 花伝-30
   - https://pachiseven.jp/machines/5957
   - 30φは25φと内部システムが全く同じとの明記、基本AT性能を照合。
   - reliability: ANALYSIS_HIGH_SUPPORT

## missingFields
- 設定変更専用モード/状態振り分け公開値。
- 朝一特定G以内当選率。
- 本機固有ガックン発生条件/率。

## conflicts
- NONE_MATERIAL_FOR_CORE。30φ `S花伝M9-30` は別型式としてNo.1329に独立登録済み。

## status
coreStatus: COMPLETE_CORE
resetBehaviorStatus: COMPLETE_PUBLIC_RESET_CORE
confidence: INDUSTRY_MODEL_CONFIRMATION + ANALYSIS_HIGH_MULTI_SOURCE
