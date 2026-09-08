machineName: SLOT魔法少女まどか☆マギカ2
manufacturer: メーシー / UNIVERSAL ENTERTAINMENT
releaseDate: 2016-09-20
recordNumber: 1010
generation: 5号機 / 5.5号機期
systemType: A+ART / CZ搭載
formalModelName: SLOT魔法少女まどか☆マギカ2／MM
certificationNumber: 6S0862
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ユニバーサルエンターテインメント公式現行アーカイブで、メーシー製・5号機・ボーナス+ART・発売2016年9月を確認。
- HAZUSEで導入開始日2016-09-20、型式名 `SLOT魔法少女まどか☆マギカ2／MM`、検定番号 `6S0862` を確認。
- 一撃、K-Navi、HAZUSEが2016-09-20導入で一致するため、本DB releaseDate は2016-09-20で固定。
reliability: OFFICIAL_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.5% |
| 2 | 99.6% |
| 3 | 101.1% |
| 4 | 104.4% |
| 5 | 107.4% |
| 6 | 111.0% |
- 一撃、HAZUSE系解析、SLOT HACK系整理で同系列一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | ART初当たり | BIG+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/297.9 | 1/424.4 | 1/175.0 |
| 2 | 1/297.9 | 1/401.5 | 1/171.0 |
| 3 | 1/290.0 | 1/376.4 | 1/163.8 |
| 4 | 1/280.1 | 1/333.8 | 1/152.3 |
| 5 | 1/265.3 | 1/299.7 | 1/140.7 |
| 6 | 1/250.1 | 1/267.4 | 1/129.3 |
- HAZUSE / 一撃 / 複数解析整理で同系列一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約31G/50枚を比較値として採用。
- 一部実戦/回顧資料に32.6G表記があるが、一般解析の約31Gをcanonicalとする。32.6Gは実戦平均系の別条件候補として混同しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_MINOR_CONDITION_VARIATION

## netIncrease
- ART「マギカ☆ラッシュ」純増: 約1.5枚/G。
- ボーナス込み約2.0枚/G表記は別定義なのでART単体純増と混同しない。
reliability: OFFICIAL_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG: 約150枚。
- ART「マギカ☆ラッシュ」: 1セット50G+α。
- エピソードボーナス / 裏ボーナスは上位ボーナスだが、物差し用基本獲得はBIG約150枚を採る。
reliability: OFFICIAL_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時CZ「魔女の結界」からARTを目指すA+ART機。
- 通常天井: ボーナス&ART間1000Gで前兆を経由してART。
- 設定変更時のみ天井がボーナス&ART間600Gへ短縮。
- 内部状態は低確 / 高確 / 超高確。
- 穢れシステムを搭載するが、実機完全再現用の全蓄積テーブルは本DB対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- ボーナス&ART間天井ゲーム数: RESET。
- リセット後専用天井: 600G。
- 内部状態: RESELECT。
- 液晶開始ステージ: 鹿目家ステージ。
- 一撃では、ボーナス中 / 確定画面 / CZ中 / ART中の場合は表示状態を引き継ぐ注記あり。

### carryOverBehavior
- 据え置きではボーナス&ART間天井ゲーム数をCARRYOVER。
- 内部状態もCARRYOVER。
- 朝一表示は鹿目家ステージへ移る整理資料があり、表示だけでの据え置き断定は不可。

### powerCycleBehavior
- 純電源OFF→ON: 天井ゲーム数 CARRYOVER。
- 内部状態: CARRYOVER。
- 一撃では液晶ステージも引き継ぐとする一方、なな徹/スロパチクエスト系では鹿目家ステージ整理があるため表示挙動には資料差を保持する。

### gameCounterReset
- 設定変更: RESETし、設定変更後専用600G天井へ。
- 据え置き / 純電源OFF→ON: CARRYOVERし、通常1000G天井を継続。

### ceilingAfterReset
- 通常: ボーナス&ART間1000G。
- 設定変更後: ボーナス&ART間600Gへ短縮。
- 600G到達後は前兆を経由してART。

### modeAfterReset
- 独立したゲーム数モードテーブルではなく、朝一主要抽選は低確 / 高確 / 超高確の内部状態再抽選として扱う。
- 状態は設定変更時再抽選、据え置き/純電源OFF→ON時引継ぎ。

### stateAfterReset
- 設定1〜3: 低確59.8% / 高確34.0% / 超高確6.3%。
- 設定4〜6: 低確39.8% / 高確53.9% / 超高確6.3%。
- 高設定域ほど高確以上スタート比率が高い。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 最大天井が1000Gから600Gへ400G短縮。
- 高確以上スタート率は設定1〜3で40.3%、設定4〜6で60.2%（公開値の合算）。
- 朝一高確挙動は設定変更期待度を高める材料になり得るが、単独での確定判別にはしない。

### resetPenalties
- 前日天井進捗は設定変更で消失。
- 前日内部状態も設定変更で再抽選される。
- 穢れポイントの設定変更時契約は、今回の再探索で本機固有の高信頼直接表を固定できなかったため推測せず `UNVERIFIED_AFTER_RESEARCH`。

### resetDetection
- 一般的なリールガックン判別は無効/使えないとする解析が複数系統で一致。
- 600Gを超えて通常状態が継続すれば据え置き根拠が強く、600G付近のART発動は設定変更期待度が上がる。
- 設定変更後は特殊RT状態へ移行するため、ベルこぼし目成立前の逆押しリプレイ停止形で据え置き濃厚パターンを取れるという当時攻略あり。ただしホールの数G回しで無効化され得るため、`PRACTICAL_RT_STATE_INDICATOR_NOT_GUARANTEED` とする。
- 筐体内履歴が短時間電断で残るという実用情報もあるが、店舗運用依存の補助判別に留める。

### numericResetData
| 設定帯 | 低確 | 高確 | 超高確 | 高確以上合計 |
|---|---:|---:|---:|---:|
| 1-3 | 59.8% | 34.0% | 6.3% | 40.3% |
| 4-6 | 39.8% | 53.9% | 6.3% | 60.2% |

- 通常天井: 1000G。
- 設定変更後天井: 600G。
- 天井短縮幅: 400G。
- 設定変更後一定G以内の自然初当たり率: NONE_CONFIRMED_AFTER_RESEARCH（600G天井到達契約とは分離）。

## dataQualityNotes
- ユニバーサル公式は5号機・メーシー・ボーナス+ART・2016年9月発売を直接確認できる。具体日2016-09-20と型式/検定番号はHAZUSE、一撃、K-Naviで照合。
- 一撃・なな徹・スロパチクエストで、設定変更時600G天井 / 状態再抽選 / 電断時天井・状態引継ぎが一致。
- 電源OFF→ON時の液晶ステージのみ、一撃は引継ぎ、なな徹/スロパチクエスト系は鹿目家ステージと整理しており表示挙動CONFLICT。内部天井・状態契約は一致しているため別項目として保持。
- 穢れポイントの設定変更時の正確なリセット/初期再抽選契約は、初代まどマギ情報との混同リスクが高い。機種名・設定変更・穢れ・電断で再探索したが、今回本機固有の直接高信頼資料を固定できなかったためUNVERIFIEDとする。
- 約31G/50枚と32.6G/50枚の差は掲載条件/実戦平均の可能性があり、32.6Gをcanonicalへ平均化しない。

## conflicts
- `POWER_CYCLE_LCD_STAGE`: 一撃=液晶ステージ引継ぎ / なな徹・スロパチクエスト系=鹿目家ステージ。内部天井・状態の引継ぎは一致。
- `BASE_31_VS_32_6`: 一般解析約31G/50枚 / 一部実戦・回顧32.6G。canonicalは約31G、32.6Gは条件差候補。

## missingFields
- 設定変更時の穢れポイント正確契約: UNVERIFIED_AFTER_RESEARCH
- メーカー保証の変更判別: NONE_CONFIRMED_AFTER_RESEARCH
- 設定変更後一定G以内の自然初当たり率: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. UNIVERSAL ENTERTAINMENT公式 — SLOT魔法少女まどか☆マギカ2
   - https://www.universal-777.com/product/slot/slot_madoka_magica2/
   - メーシー、5号機、ボーナス+ART、2016年9月発売、ワルプルギス/穢れ継承。
2. HAZUSE — SLOT魔法少女まどか☆マギカ2
   - https://hazuse.com/machine/pachislot/SX0136/
   - 導入2016-09-20、型式SLOT魔法少女まどか☆マギカ2／MM、検定6S0862、設定別ART/BIG、通常1000G・リセット600G天井。
3. 一撃 — 機種概要
   - https://1geki.jp/slot/s_madomagi2/
   - 導入2016-09-20、機械割98.5〜111.0%、純増約1.5枚/G。
4. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_madomagi2/3/
   - 設定変更600G天井、状態再抽選、設定帯別低/高/超高、電断時天井・状態引継ぎ。
5. K-Navi
   - https://p-kn.com/slot/2590/
   - ホール導入開始2016-09-20。
6. パチマガスロマガ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/macy_slot/45/a.php
   - BIG約150枚、ART50G・約1.5枚/G。
7. なな徹 — 朝イチ/設定変更
   - https://nana-press.com/kaiseki/machine/50/904/
   - 天井RESET/電断引継ぎ、状態再抽選/引継ぎ、設定帯別初期状態、600G短縮。
8. スロパチクエスト — 朝一リセット設定変更まとめ
   - https://www.slopachi-quest.com/article/madomagi2-reset/
   - 600G天井、ガックン無効、特殊RT状態を使う実用判別、筐体内履歴の補助情報。
9. SLOT HACK — 設定差まとめ
   - https://slothack.net/matome/1563/
   - 約31G/50枚、BIG/ART初当たり、機械割、BIG約150枚、ART50G+α。

## boundaryAudit
- 2016-09-13〜09-19についてHAZUSE月間境界は09/12→09/20。日別検索・新台カレンダー・メーカー系検索で全国導入本線として固定できる未登録5号機を今回確認できず、`2016-09-13_TO_09-19_CLOSED_FOR_CURRENT_RESEARCH`。
- 09/20同日群は本機だけではない。K-Naviで `乱嵐エイサー-30`（オーイズミ）が2016-09-20導入と確認できるため、09/20群はOPENのまま次候補へ渡す。
