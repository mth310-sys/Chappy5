machineName: パチスロ 宇宙戦艦ヤマト2199
manufacturer: Sammy
releaseDate: 2017-02-20
recordNumber: 1049
generation: 5号機 / 5.5号機期
systemType: A+ART
formalModelName: 宇宙戦艦ヤマト2199／ZX
certificationNumber: 6S1502
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- サミー公式は2017-01-06に本機発売を告知。サミーのマイスロ告知は2017-02-20を「ホール導入日」と直接明記。
- HAZUSEも導入開始日2017-02-20、型式 `宇宙戦艦ヤマト2199／ZX`、検定番号 `6S1502` で一致。
- 2017-01-12のグリーンべると業界記事は「2月中旬納品開始予定」としており、導入日との矛盾ではなく物流予定として分離する。
reliability: OFFICIAL_PLUS_INDUSTRY_PLUS_ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 98.8% |
| 3 | 100.3% |
| 4 | 104.6% |
| 5 | 108.1% |
| 6 | 112.0% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG / 大ガミラスモード
- BIG: 全設定約1/1986
- 大ガミラスモード: 全設定約1/1986

### ART初当たり
| 設定 | ART |
|---:|---:|
| 1 | 1/400 |
| 2 | 1/385 |
| 3 | 1/383 |
| 4 | 1/334 |
| 5 | 1/309 |
| 6 | 1/270 |

### ボーナス・ART合算
| 設定 | 合算 |
|---:|---:|
| 1 | 1/285 |
| 2 | 1/277 |
| 3 | 1/277 |
| 4 | 1/250 |
| 5 | 1/236 |
| 6 | 1/212 |
reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約38.2〜38.5G/50枚（設定差あり）。現時点で比較可能な公開値はレンジとして採用し、設定別小数表は直接再取得できた資料が限定的なため過剰精密化しない。
reliability: ANALYSIS_SINGLE

## netIncrease
- ART「イスカンダルロード」: 約1.9枚/G。
- ボーナス込みでは約2.0枚/Gとする解析資料もあるため、単体ART純増と混同しない。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- BIG BONUS: 約204枚。
- 大ガミラスモード: 約48枚。
- ART「イスカンダルロード」: 初期40G+α。
- MB「COSMO COMBO」: 9枚役×4G、約24枚獲得のゲーム性要素。
reliability: INDUSTRY

## modeSpecificMinimumData
- A+ART。通常時の主要出玉契機はART「イスカンダルロード」。
- 通常天井はART間1200G。途中のボーナスでは天井ゲーム数をリセットしない。
- CZ/ミッション高確等を搭載するが、通常時の全内部抽選は本DBスコープ外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_RESET_NUMERIC_DATA_AVAILABLE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時はART間天井進捗をリセットし、200G / 400G / 800G / 1200Gのいずれかへ天井ゲーム数を再選択。
- 内部状態も再抽選。設定1〜6共通で低確50.0% / 高確50.0%。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 設定変更しない場合は、朝一客AI上重要なART間天井進捗と内部状態を引き継ぐ扱いを採用。
- 純電源OFF→ONの直接表で天井・内部状態とも「引き継ぐ」が確認されるため、据え置き時も同系統のCARRYOVERとして扱う。
reliability: ANALYSIS_HIGH_FOR_POWER_CYCLE; ANALYSIS_DERIVED_CONSISTENT_FOR_HOLDOVER

### powerCycleBehavior
- 電源OFF→ONのみ: 天井ゲーム数を引き継ぐ。
- 内部状態を引き継ぐ。
- 液晶ステージは当時解析で「調査中」のため `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: RESET_AND_RESELECT_CEILING_GAME_COUNT。
- 据え置き / 純電断: CARRYOVER。

### ceilingAfterReset
- 通常: ART間1200G。
- 設定変更後: 200 / 400 / 800 / 1200Gから再選択。実質的に大半の設定変更で短縮される。

### modeAfterReset
- 天井ゲーム数テーブルを設定変更時に再選択。
- 通常時の全モード移行テーブルはSCOPE_EXCLUDED。

### stateAfterReset
- 設定変更時: 低確50.0% / 高確50.0%（全設定共通）。
- 電源OFF→ON: 内部状態CARRYOVER。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 朝一設定変更時は通常1200G天井に対し、200/400/800G選択が中心となる短縮恩恵がある。
- 200G選択率は設定差があり、高設定側ほど優遇傾向。
- 設定変更後1200G選択は設定4以上でのみ発生する解析値のため、客側の設定推測材料になり得る。

### resetPenalties
- 前日ART間天井進捗は設定変更で消失するため、深い宵越しゲーム数を狙う客には不利。
- それ以外の主要な設定変更専用ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更後の天井到達ゲーム数が主要な事後判別材料。
- 1200G天井が選択された場合は設定4以上濃厚とする当時解析がある。200G選択は設定2以上期待度上昇。
- 朝一液晶ステージ単独の確定判別、機種固有ガックン等は再探索後も直接固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData
| 設定 | 200G | 400G | 800G | 1200G |
|---:|---:|---:|---:|---:|
| 1 | 1.7% | 20.0% | 78.3% | 0% |
| 2 | 5.0% | 15.0% | 80.0% | 0% |
| 3 | 5.0% | 20.0% | 75.0% | 0% |
| 4 | 5.0% | 15.0% | 79.6% | 0.4% |
| 5 | 5.0% | 20.0% | 72.5% | 2.5% |
| 6 | 8.3% | 25.0% | 62.5% | 4.2% |

- 設定変更時内部状態: 全設定共通 低確50.0% / 高確50.0%。

## dataQualityNotes
- 純増は業界記事がART約1.9枚/G、解析ではボーナス込み約2.0枚/G表記がある。定義差として分離しCONFLICTにはしない。
- BIG/大ガミラスモード確率は解析資料の丸め表示1/1986を採用。完全な精密分母は今回スコープ上必須ではない。
- 50枚ベースは約38.2〜38.5Gの設定差レンジを保持し、直接確認できない設定別細目を推測しない。

## conflicts
- release-date note: 全国ホール導入2017-02-20（サミー公式/HAZUSE） vs 業界記事の「2月中旬納品開始予定」。日付定義が異なるため実質CONFLICTではない。

## missingFields
- power-cycle LCD stage behavior: `UNVERIFIED_AFTER_RESEARCH`。
- machine-specific physical gakkun/initial-display reset detection: `NONE_CONFIRMED_AFTER_RESEARCH`。
- detailed setting-specific baseGamesPer50 table: `UNVERIFIED_AT_FINE_GRAIN`。
- 実機完全再現用の通常時全内部抽選: SCOPE_EXCLUDED。

## sources
retrievedDate: 2026-09-09
- OFFICIAL / Sammy 発売告知: https://new.sammy.co.jp/japanese/news/old/2017/615.html
- OFFICIAL / Sammy マイスロ（2017-02-20ホール導入日）: https://www.sammy.co.jp/japanese/myslot/news/index_9.html
- INDUSTRY / グリーンべると・P-WORLD: https://news.p-world.co.jp/articles/8958/greenbelt
- ANALYSIS_DB / HAZUSE: https://hazuse.com/machine/pachislot/6S1502/
- ANALYSIS_DB / HAZUSE 天井: https://hazuse.com/machine/pachislot/6S1502/genre/207/
- ANALYSIS / すろぱちくえすと: https://www.slopachi-quest.com/article/yamato-2199/
- ANALYSIS / パチ7 天井: https://pachiseven.jp/machines/5058/cutout/78
- ANALYSIS / パチ7 ART: https://pachiseven.jp/machines/5058/cutout/6
- RETROSPECTIVE_ANALYSIS / Pachinavi: https://pachinavi.net/machines/uchuu-senkan-yamato-2199/

## retrievalHistory
- identity/release: `宇宙戦艦ヤマト2199 / パチスロ宇宙戦艦ヤマト2199 / 6S1502 / 宇宙戦艦ヤマト2199 ZX / 導入日 / ホール導入 / 納品`。
- performance: `機械割 / ART初当たり / BIG / 大ガミラスモード / 50枚 / ベース / コイン持ち / 純増 / 204枚 / 48枚`。
- reset: `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 200G / 400G / 800G / 1200G / 内部状態 / ガックン / 変更判別`。
