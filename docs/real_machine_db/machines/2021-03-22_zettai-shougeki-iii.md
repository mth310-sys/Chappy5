# 絶対衝激Ⅲ

No: 1401
machineName: 絶対衝激Ⅲ
machineNameVariants: 絶対衝激Ⅲ / 絶対衝激III / 絶対衝激3 / S絶対衝激Ⅲ / S絶対衝激IIISS
manufacturer: スパイキー
releaseDate: 2021-03-22
formalModelName: S絶対衝激IIISS
certificationNumber: 0S1415

generation: 6.1号機
systemType: AT / 擬似ボーナス / 衝激ループ

## identity / release
- HAZUSEで型式 `S絶対衝激IIISS`、検定番号 `0S1415`、メーカー表記スパイキー、導入開始日2021-03-22を確認。
- 1geki・K-Navi・当時攻略資料でも2021-03-22導入で一致。
- 著作/開発表記にはNANASHOW（七匠）が併記されるが、本DBのmanufacturerは市場掲載上のスパイキーをcanonicalとする。
- reliability: ANALYSIS_HIGH / INDUSTRY

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.4% |
| 2 | 98.9% |
| 3 | 101.1% |
| 4 | 104.1% |
| 5 | 106.2% |
| 6 | 108.5% |
- HAZUSE、1geki、K-Navi、必勝本、イチカツ等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | 初当り | 衝激ループ |
|---:|---:|---:|
| 1 | 1/216 | 1/507 |
| 2 | 1/206 | 1/485 |
| 3 | 1/194 | 1/460 |
| 4 | 1/181 | 1/432 |
| 5 | 1/176 | 1/422 |
| 6 | 1/172 | 1/413 |
- 複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約36G/50枚（設定1）。
- HAZUSE、1geki、必勝本、イチカツ等で照合。
- reliability: ANALYSIS_HIGH

## netIncrease
- 約2.7枚/G（AT・擬似ボーナス）。
- reliability: ANALYSIS_HIGH

## basicPayout
- バトルBONUS: 15G、平均獲得約40枚。
- プラトニックBONUS: 30G+α、純増約2.7枚/G。
- 衝激ループ突入時のTY目安は約500枚とする資料あり。これは単発PBの基本獲得枚数とは定義を分ける。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は「心の距離pt」到達から前兆/ CZ等を経由して初当りを目指す。
- 通常天井: 有利区間突入後555G+αでバトルBONUS当選。555G到達後のココ満ルーレットで告知されるため即555G発動とは限らない。
- 天井管理状態に通常/天国があり、天国は初回心の距離MAXでボーナス当選。
- 基本モードはノーマル / ココアゲUP / モテ期UP / 引き戻し / 裏準備。裏モードは32G以内ボーナス・90%以上ループとされるが、通常時全移行テーブルは物差し用途外のため収集しない。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_CONTRACT_WITH_EMPIRICAL_MORNING_VALUE
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は有利区間・天井・内部状態・内部モードをRESET。
- 非有利区間から開始し、その後有利区間移行時にモード抽選。
- 液晶開始ステージは渋谷・昼。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 設定据え置き時は、設定変更を伴わない電源OFF→ON契約に基づき、天井・内部状態・内部モード・有利区間を引き継ぐ扱いをcanonicalとする。
- 据え置きを独立表記した一次資料ではなく、複数朝一解析の「設定変更時 vs 電源OFF→ON時」表に基づく。
- reliability: ANALYSIS_HIGH_WITH_DEFINITION_NOTE

### powerCycleBehavior
- 電源OFF→ONのみ: 有利区間・天井・内部状態・内部モードをCARRY_OVER。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: 天井G数RESET。
- 据え置き / 純電断: 天井G数CARRY_OVER。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 設定変更による固定の短縮天井は確認されない。通常天井契約は555G+α。
- ただし設定変更後はモード/天井状態振り分けが優遇されるため、早い初当りが発生しやすい。これは「固定短縮天井」と混同しない。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時はモードを再抽選。
- 設定変更後は約29.0%で朝一/特殊テーブル、約71.0%でその他/通常テーブルを参照。
- 朝一/特殊テーブル選択時の天井管理状態: 天国75.0% / 通常25.0%（全設定共通）。
- 同テーブルの基本モード: ノーマル24.8% / ココアゲUP9.3% / モテ期UP9.3% / 引き戻し55.8% / 裏準備0.8%（全設定共通）。
- 通常テーブル側は設定差があり、天国選択率は設定1 28.1% → 設定6 60.9%。詳細は朝一挙動比較に必要な範囲のみ保持し、通常時全移行履歴は収集しない。
- reliability: ANALYSIS_HIGH（なな徹・1geki・HAZUSE・パチ7で照合）

### stateAfterReset
- 設定変更: 内部状態RESET。
- 純電断: 内部状態CARRY_OVER。
- 設定変更時の全内部状態振り分けは物差し用途を超えるため収集しない。
- reliability: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: 有利区間RESET、非有利区間から開始。
- 純電断: 有利区間CARRY_OVER。
- ボーナス/衝激RUSH終了後にも有利区間リセット契機が存在する。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更後は約29%で朝一/特殊テーブルが選ばれ、天国75.0%、引き戻し55.8%など早い初当り側へ優遇。
- 朝一設定変更直後は数G以内のリアルボーナス狙いが成立する特殊挙動が実戦値で確認されている。
- 実戦値: 当選率22.3%（57/256）、当選時を含む平均獲得204枚、試算期待値約750円・機械割約135%。これは解析確定値ではなく2021年当時の実戦サンプル値として `EMPIRICAL_SINGLE_SAMPLE` 扱いにする。
- 128G以内当選期待度約40%という一般特性もあるが、設定変更専用値ではないためreset専用数値としては扱わない。
- reliability: ANALYSIS_HIGH（モード） / EMPIRICAL_SINGLE_SAMPLE（朝一リアボ）

### resetPenalties
- 設定変更専用の明確な定量的不利要素は公開資料から確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 設定変更すると非有利区間から開始するため、有利区間ランプ消灯が変更判別材料となる。
- 通常時の有利区間ランプ点灯状態から据え置き/変更を推測できる資料がある。一方、店側が設定変更後に数G回してランプを点灯させる対策が可能なため、ランプだけを絶対判定にはしない。
- 液晶ステージ単独でのリセット判別は不可とする解析あり。
- 本機固有のリールガックン条件/発生率は、機種名・型式・シリーズ名に「ガックン」「設定変更」「朝一」等を組み合わせて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH（ガックン）

### numericResetData
- 朝一/特殊テーブル選択率: 29.0%（設定変更後）。
- その他/通常テーブル選択率: 71.0%。
- 特殊テーブル選択時 天国: 75.0%、通常: 25.0%。
- 特殊テーブル基本モード: ノーマル24.8%、ココアゲUP9.3%、モテ期UP9.3%、引き戻し55.8%、裏準備0.8%。
- 朝一リアルボーナス実戦当選率: 22.3%（57/256、EMPIRICAL_SINGLE_SAMPLE）。
- 同実戦平均獲得: 204枚（リアボ連チャン/引き戻しAT込み）。
- 固定短縮天井: `NO_FIXED_SHORTENING_CONFIRMED`。
- 本機固有ガックン発生率: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- manufacturer表記は攻略ページ本文でNANASHOW/七匠とされる場合がある一方、HAZUSE・市場DBではメーカーをスパイキーとする。型式・市場機種のcanonical manufacturerはスパイキー、NANASHOWは開発/著作系表記として注記。
- 朝一リアルボーナス22.3%等は実戦サンプルであり、メーカー公表/解析確定確率ではない。確定値へ昇格しない。

## missingFields
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の明確な定量的不利要素: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-12

1. HAZUSE「絶対衝激Ⅲ」
   - https://hazuse.com/machine/pachislot/0S1415/
   - 型式、検定番号、導入日、メーカー、6.1号機、初当り/衝激ループ、機械割、50枚ベース、純増、モード・設定変更情報。
   - reliability: ANALYSIS_HIGH
2. ちょんぼりすた「S絶対衝激Ⅲ」
   - https://chonborista.com/slot/nanashow/129577/
   - 性能コア、555G+α天井、設定変更/電源OFF→ONの有利区間・天井・状態・モード挙動、朝一リアボ実戦値。
   - reliability: ANALYSIS_HIGH / EMPIRICAL_SINGLE_SAMPLE
3. なな徹「通常時のモード移行率」
   - https://nana-press.com/kaiseki/machine/113/3505/
   - 設定変更後の朝一テーブル29%、天国75%、基本モード振り分け、通常テーブル設定差。
   - reliability: ANALYSIS_HIGH
4. 1geki「絶対衝激Ⅲ 通常時のモード」
   - https://1geki.jp/slot/s_zettaishougeki3/38/
   - 設定変更時特殊テーブルと各モード振り分け。
   - reliability: ANALYSIS_HIGH
5. 1geki「絶対衝激Ⅲ」
   - https://1geki.jp/slot/s_zettaishougeki3/
   - 基本仕様、バトルBONUS、純増、ゲームフロー。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ「バトルボーナス」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/16/bn01.php
   - バトルBONUS 15G・平均約40枚。
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ「ゲームの流れ」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/spiky_slot/16/kh03.php
   - PB 30G+α、純増2.7枚/G、衝激ループ構造。
   - reliability: ANALYSIS_HIGH
8. パチ7「絶対衝激3」
   - https://pachiseven.jp/machines_v2/6248
   - 555G天井、設定変更時の非有利区間/モード移行、朝一特殊テーブル。
   - reliability: ANALYSIS_HIGH
9. スロット解析.com「設定変更後朝イチ恩恵」
   - https://slotkaiseki.com/zettaishougeki_henkougo/
   - 設定変更時は非有利区間開始、有利区間ランプによる判別と店側対策可能性。
   - reliability: ANALYSIS_SINGLE_CORROBORATING
10. イチカツ「絶対衝激3」
   - https://ichikatsu.com/zettaishougeki3/
   - 導入日、性能コア、天井、モード、有利区間ランプ。
   - reliability: ANALYSIS_HIGH
11. K-Navi「絶対衝激Ⅲ」
   - https://p-kn.com/slot/3550/
   - 2021-03-22導入、初当り/衝激ループ/機械割。
   - reliability: ANALYSIS_HIGH
12. 1geki 2021年3月新台カレンダー
   - https://1geki.jp/newmachinecalender/202103/
   - 2021-03-22群のスロットは本機1機掲載。
   - reliability: INDUSTRY/ANALYSIS_CALENDAR

## notes
- 実機完全再現用の小役別抽選、全通常モード移行、CZ内部抽選、ストック詳細は収集対象外。
- 2021-03-22全国系カレンダーではスロット1機のみ。地域機/PB/別型式についても別系統カレンダーを照合し、現時点で同日追加候補は確認できない。