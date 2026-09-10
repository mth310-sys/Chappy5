# パチスロ ボンバーパワフルIII

recordNo: 1283
machineName: パチスロ ボンバーパワフルIII
manufacturer: SANKYO
formalModel: Sボンバーパワフル3V
certificationNumber: 8S0924
releaseDate: 2019-05-07
generation: 6号機
systemType: AT / 疑似ボーナス / CZ / 6段階設定

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.7% |
| 2 | 99.7% |
| 3 | 101.9% |
| 4 | 104.4% |
| 5 | 107.7% |
| 6 | 112.1% |

信頼度: HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | CZ | 通常時ボーナス初当たり | AT初当たり |
|---|---:|---:|---:|
| 1 | 1/162 | 1/324 | 1/691 |
| 2 | 1/160 | 1/303 | 1/638 |
| 3 | 1/158 | 1/278 | 1/576 |
| 4 | 1/157 | 1/252 | 1/514 |
| 5 | 1/156 | 1/226 | 1/448 |
| 6 | 1/149 | 1/160 | 1/229 |

信頼度: HIGH_MULTI_SOURCE

## baseGamesPer50

- 約49.4G/50枚

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT / 疑似ボーナス: 約3.2枚/G
- AT「パワフルタイム」: 1セット25G
- セット数上乗せ・終了後引き戻しを含む平均継続率: 約85%

信頼度: OFFICIAL_INDUSTRY_MULTI_SOURCE

## basicPayout

- パワフルボーナス: 25G、約3.2枚/Gの疑似ボーナス
- 夢夢ボーナス: 40G、約3.2枚/G、AT突入濃厚
- AT「パワフルタイム」: 1セット25G
- 通常時CZ「シャッターチャンス」: 10G、ボーナス期待度約45%

信頼度: OFFICIAL_INDUSTRY_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は規定ゲーム数、レア小役、1000pt到達等からCZ「シャッターチャンス」を目指す。
- ゲーム数天井: 有利区間移行後900Gで、内部的にボーナス当選濃厚のCZへ移行。
- 900G到達後、ボーナス入賞まで933G以上となった場合はAT3セット以上濃厚とする解析あり。
- CZスルー天井: ボーナス非当選CZを4回連続スルーすると5回目CZはボーナス当選濃厚。
- 300G / 600GにもCZ当選ゾーンが存在し、解析値は300G 21.8%、600G 43.7%、900G 100%。これは通常ゲーム性側の値であり、リセット専用数値ではない。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_DIRECT_SOURCE

- settingChangeBehavior: 設定変更時は天井までのG数、CZ回数、ポイント、メニュー画面情報をリセット。内部状態もリセットとする解析資料あり。開始ステージは市街地（昼）。
- carryOverBehavior: 据え置き単独条件の直接表記は限定的だが、純電源OFF→ONでは天井G数・CZ回数・内部ポイントを引き継ぐ直接資料があり、設定を変更しない電断復帰では主要進行値を保持する。`CARRY_OVER_DIRECT_POWER_CYCLE_SOURCE`。
- powerCycleBehavior: 電源OFF→ONのみでは天井までのG数とCZ回数を引き継ぐ。ポイント表示は0へ戻るが内部ポイントは引き継ぐ。通常時は市街地（昼）から開始し、ボムボムチャージ・CZ・ボーナス・AT中の電断では当該状態を引き継ぐとする資料あり。
- gameCounterReset: 設定変更=RESET / 電源OFF→ON=CARRY_OVER。天井は有利区間移行後900G。
- ceilingAfterReset: 設定変更による短縮天井は確認なし。通常天井900Gをゼロから再計測。`NO_SHORTENING_CONFIRMED`。
- modeAfterReset: 設定変更時は主要状態をリセット。有利区間移行時は高確へ移行する解析があるが、設定変更専用のモード振り分け表は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- stateAfterReset: 設定変更=RESET / 電源OFF→ON=CARRY_OVER。通常時内部状態は通常・高確・高確ロング。設定変更後の厳密な各状態振り分け率は公開値を固定できず。
- advantageousSectionReset: ゲーム数天井は「有利区間移行後900G」と明記され、CZスルー回数は有利区間終了時にリセット。有利区間移行時は高確へ移行する解析あり。設定変更時は天井/CZ回数等がリセットされるため朝一の区間進行は再スタート扱い。純電断は進行値を引き継ぐ。
- resetBenefits: 有利区間移行時は高確へ移行する解析あり。設定変更専用の天井短縮はなし。朝一専用AT/CZ確定などは確認なし。
- resetPenalties: 設定変更で前日の天井G数、CZスルー回数、内部ポイントを失う。これらが育っていた台では据え置きと比べ朝一狙い価値が低下し得る。
- resetDetection: 設定変更・純電断とも通常時は市街地（昼）開始のためステージ単独では判別困難。純電断時はポイント表示が0でも内部ポイントを引き継ぐため、表示0ptだけでは変更確定にならない。ボムボムチャージ/CZ/ボーナス/AT中の状態復帰は据え置き・電断推測材料となり得る。本機固有ガックン発生率・確定条件は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- numericResetData: 設定変更時のみのモード振り分け・短縮天井・初当たり率などの公開専用数値は `PUBLIC_NUMERIC_RESET_DATA_NOT_FOUND_AFTER_RESEARCH`。有利区間移行時の高確移行は確認されるが専用振り分け率は未固定。

### resetBehavior 再探索メモ

「ボンバーパワフルIII / ボンバーパワフル3 / Sボンバーパワフル3V / 8S0924 / SANKYO」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / CZスルー / ポイント / 高確 / 有利区間 / ガックン」を組み合わせ、SANKYO公式、HAZUSE、DMMぱちタウン、一撃、当時解析、業界記事、導入カレンダーまで横断。主要reset契約はHAZUSEとDMMで直接固定。本機固有ガックン条件、設定変更専用モード振り分け率は固定できなかったため推測で補完しない。

## qualityNotes / conflicts

- SANKYO公式オンライン博物館は導入年月を2019.05とし、型式 `Sボンバーパワフル3 V`、純増約3.2枚/G、設定別通常時ボーナス確率を掲載。
- 導入日はK-Navi、DMM、遊技通信、複数2019導入カレンダーが2019-05-07で一致。一方HAZUSEと一撃カレンダーは2019-05-06。ホール導入のcanonicalは多数資料一致の2019-05-07とし、`CONFLICT_RELEASE_DATE_2019_05_06_VS_2019_05_07` を保持。
- 古いPachibeeページには2019-04-22表記があるが、メーカー公式の2019.05、業界記事の5/7予定、複数導入カレンダーと整合しないためcanonical不採用。`CONFLICT_OUTLIER_RELEASE_DATE_2019_04_22`。
- 型式名の空白有無（`Sボンバーパワフル3 V` / `Sボンバーパワフル3V`）は表記差として扱う。
- モゲスロ導入カレンダーのメーカー欄にSANYO表記があるが、SANKYO公式・HAZUSE・P-WORLD等によりSANKYOをcanonicalとする。

## sources

取得日: 2026-09-11

1. SANKYOオンライン博物館 — パチスロ ボンバーパワフル3
   - https://www.sankyo-fever.jp/collection/890/
   - 公式。2019.05、型式 `Sボンバーパワフル3 V`、通常時ボーナス確率、純増約3.2枚/G、AT/CZ基本仕様
   - reliability: OFFICIAL
2. HAZUSE — パチスロ ボンバーパワフルIII
   - https://hazuse.com/machine/pachislot/8S0924/
   - 型式 `Sボンバーパワフル3V`、検定番号 `8S0924`、設定別CZ/ボーナス/AT、機械割、天井、設定変更/電源ON-OFF時契約
   - reliability: ANALYSIS_DATABASE_HIGH
3. DMMぱちタウン — パチスロボンバーパワフルIII
   - https://p-town.dmm.com/machines/3416
   - 導入2019-05-07、機械割、電源OFF/ON時ポイント表示と内部引継ぎ、設定変更時状態リセット
   - reliability: ANALYSIS_HIGH
4. P-WORLD — パチスロ ボンバーパワフルIII
   - https://www.p-world.co.jp/machine/database/8918
   - 6号機AT、型式、検定番号、基本仕様、設定別CZ/ボーナス値
   - reliability: MACHINE_DATABASE_HIGH
5. 遊技通信 / P-WORLD業界ニュース — SANKYOのパチスロボンバーパワフル最新作登場
   - https://news.p-world.co.jp/articles/10926/yugitsushin
   - 2019-04-08、純増約3.2枚/G、AT25G、平均継続率約85%、5月7日ホール導入予定
   - reliability: INDUSTRY_CONTEMPORARY
6. グリーンべると — SANKYO初の6号機『ボンバーパワフル』
   - https://web-greenbelt.jp/00011220/
   - 2019-04-09、SANKYO初6号機、CZ/疑似ボーナス/AT仕様、約49.4G、出玉率97.7〜112.1%、納品5月6日予定
   - reliability: INDUSTRY_CONTEMPORARY
7. ちょんぼりすた — ボンバーパワフル3解析
   - https://chonborista.com/slot/sankyo-slot/80592/
   - 設定別CZ/ボーナス/AT/機械割、49.4G/50枚、900G天井、300/600/900G CZ当選率、有利区間・朝一挙動
   - reliability: ANALYSIS_HIGH
8. 一撃 — ボンパワ3 AT概要
   - https://1geki.jp/slot/s_bomp3/81/
   - 純増約3.2枚/G、1セット25G、平均継続率約85%
   - reliability: ANALYSIS_HIGH
9. 一撃 — 状態移行抽選
   - https://1geki.jp/slot/s_bomp3/45/
   - 通常/高確/高確ロング、状態移行解析
   - reliability: ANALYSIS_HIGH
10. K-Navi — パチスロ ボンバーパワフルIII
   - https://p-kn.com/slot/3230/
   - 導入開始2019-05-07、通常時ボーナス確率
   - reliability: ANALYSIS_DATABASE
11. モゲスロ — 2019新台導入日カレンダー
   - https://moge-site.com/new-slot2019
   - 2019-05-07群にジャングルマスターコングダム / ボンバーパワフルIII
   - reliability: CALENDAR_SECONDARY
12. パチンコ・パチスロ.com — 新台導入日カレンダー2019
   - https://pachinkopachisro.com/archives/52807194.html
   - 5月7日にジャングルマスターコングダム / Sボンバーパワフル3Vを掲載
   - reliability: CONTEMPORARY_CALENDAR

## missingFields

- 据え置きだけを純電源OFF→ONと完全分離して説明する本機固有資料: PARTIAL（純電断の直接契約は取得済み）
- 本機固有ガックン発生率/確定条件: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用モード/内部状態の数値振り分け: UNVERIFIED_AFTER_RESEARCH

## conflicts

- CONFLICT_RELEASE_DATE_2019_05_06_VS_2019_05_07
- CONFLICT_OUTLIER_RELEASE_DATE_2019_04_22
- SOURCE_TYPO_MANUFACTURER_SANYO_VS_OFFICIAL_SANKYO

status: COMPLETE_CORE_RESET_V07_HIGH
