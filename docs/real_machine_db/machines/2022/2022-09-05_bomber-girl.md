# ボンバーガール

recordNo: 1518
machineName: ボンバーガール
manufacturer: KPE / コナミアミューズメント
formalModel: SボンバーガールPM
inspectionCode: 2S0154
releaseDate: 2022-09-05
generation: 6.5号機
systemType: A+AT / リアルボーナス + CZ + セット継続AT

## payoutRateBySetting
- 設定1: 97.9%
- 設定2: 99.1%
- 設定4: 101.5%
- 設定5: 104.4%
- 設定6: 108.2%

1geki、パチマガスロマガ、HAZUSE、PiDEA等で一致。

信頼度: ANALYSIS_HIGH / INDUSTRY_CROSSCHECK

## initialHitBySetting
### 通常時BIG
- 設定1: 1/399.6
- 設定2: 1/394.8
- 設定4: 1/381.0
- 設定5: 1/360.1
- 設定6: 1/341.3

### CZ初当り
- 設定1: 1/83.7
- 設定2: 1/81.2
- 設定4: 1/77.3
- 設定5: 1/74.3
- 設定6: 1/72.8

### AT初当り（ベースアタック+ボンバータイム合成）
- 設定1: 1/350.1
- 設定2: 1/336.1
- 設定4: 1/312.6
- 設定5: 1/297.3
- 設定6: 1/286.9

### AT中BIG
- 設定1: 1/99.9
- 設定2: 1/99.0
- 設定4: 1/97.1
- 設定5: 1/94.0
- 設定6: 1/91.7

信頼度: ANALYSIS_HIGH

## baseGamesPer50
- 約34.9G/50枚（設定1）。
- PiDEA導入前資料では34.8G表記。丸め差として扱い、canonicalは最終解析群の34.9G。

信頼度: ANALYSIS_HIGH

## netIncrease
- ベースアタック / ボンバータイム: 約0.7枚/G
- ラッシュタイム / スーパーボンバータイム: 約2.5枚/G

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- 白7BIG: 約150枚
- 黒7BIG: 約100枚
- 初回AT「ベースアタック」: 50G、純増約0.7枚/G
- メインAT「ボンバータイム」: 1セット100G+α、純増約0.7枚/G、セット継続率約80%
- AT中はボーナス確率が設定1で約1/99.9まで上昇。
- PiDEA導入前資料のRUSH平均獲得約869枚は比較用公開値として保持。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はBIGまたはCZ「ガールズイベント」からATを目指すA+AT機。
- CZ・BB・AT間460G+αでAT「ボンバータイム」へ突入する天井あり。
- BB・AT間960G+αでもAT「ボンバータイム」へ突入。
- メニュー画面の「チャンス間」「ボーナス間」で各ゲーム数を確認可能。
- 有利区間ランプは非搭載。
- スーパーボンバータイム中のボーナス当選時は有利区間をリセットしバトルボーナスへ移行する特殊仕様を持つ。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間、天井ゲーム数、内部状態をリセット。
- 朝一は昼ステージから開始。
- 設定変更後は約30G間の高確状態に滞在する。液晶見た目は昼ステージのため、高確そのものを外見だけで直接判別はできない。
- 高確中はCZ「ガールズイベント」当選率、およびBIG当選時のAT突入抽選が優遇される。

### carryOverBehavior
- 据え置き時は有利区間、天井、内部状態、ステージを引き継ぐ。
- 朝一に夕方ステージ、シロ作戦会議、クロ作戦会議など前日の状態を示すステージから開始した場合は据え置き濃厚材料となる。

### powerCycleBehavior
- 設定変更を伴わない純電源OFF→ONでは、天井、内部状態、ステージを引き継ぐ。
- 有利区間についても据え置き扱いのまま継続する契約とする。
- 純電断時の扱いはAltemaの朝一比較表と、なな徹の据え置き契約を合わせて固定。

### gameCounterReset
- 設定変更時: CZ・BB・AT間460G系カウンタ、BB・AT間960G系カウンタともRESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- メニュー画面の「チャンス間」「ボーナス間」で進行ゲーム数を確認可能。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は確認できない。
- 設定変更後も通常天井はCZ・BB・AT間460G+α / BB・AT間960G+α。
- `NO_RESET_SHORTENING_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 朝一客AIに必要な比較可能な「設定変更専用モード振り分け」は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 本機は内部状態（通常/高確/超高確）による抽選差が中心で、設定変更後は約30G高確が明示される。

### stateAfterReset
- 設定変更時: RESET後、約30G間の高確状態から開始。
- 据え置き/純電源OFF→ON: 内部状態CARRY_OVER。
- 朝一設定変更後の高確は見た目上の昼ステージと一致しないため、外見だけで状態判別しない。

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 6.5号機で有利区間ランプ非搭載のため、ランプによる朝一設定変更判別は不可。
- 通常時BIG終了後AT非当選時、ベースアタック終了時、ボンバータイム終了時にも有利区間リセット契機が存在するため、有利区間リセット自体は設定変更専用挙動ではない。

### resetBenefits
- 設定変更後、約30G間の高確状態。
- 高確中はCZ当選率およびBIG成立時AT突入抽選が優遇。
- 昼ステージから開始するため、前日最終ステージと組み合わせれば変更推測材料になる。

### resetPenalties
- 設定変更固有の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のためランプ判別不可。
- 朝一が夕方ステージ、シロ作戦会議、クロ作戦会議等から始まれば据え置き濃厚。
- 昼ステージ開始は設定変更候補だが、前日も昼ステージだった場合や店舗が事前に回した場合は確定材料にならない。
- 本機固有の設定変更時リールガックン条件/発生率は、表記・型式・メーカー名・ガックン/リール始動で再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更後の高確滞在: 約30G。
- 設定変更専用の短縮天井: `NONE_CONFIRMED`。
- 設定変更専用モード振り分け: `UNVERIFIED_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更後: 約30G間の高確状態。
- 朝一ステージ: 昼ステージ。
- 高確中はCZ「ガールズイベント」当選率およびBIG当選時AT突入抽選が優遇されるが、朝一30G以内の総当選率など比較可能な固定値は確認できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- 検索語: `ボンバーガール / SボンバーガールPM / 2S0154 / KPE / コナミアミューズメント / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 高確 / モード / 状態 / ガックン / 有利区間`。
- HAZUSE、1geki、なな徹、パチマガスロマガ、PiDEA、P-WORLD/Greenbelt検定記事、Altema、イチカツ等を横断。
- 性能コア、天井2系統、設定変更後約30G高確、昼ステージ、据え置き/純電断の天井・状態・ステージ引継ぎは複数資料または別系統資料で固定。
- ガックン、設定変更専用モード振り分け、朝一30G以内の総当選率は十分な再探索後も固定資料なし。

## conflicts
- 導入前PiDEA資料には設定L欄が存在するが、最終解析のパチマガスロマガは「設定1・2・4・5・6の5段階設定」と明記し、1geki/HAZUSE等も同5設定のみを掲載。DB canonicalは最終市場仕様の5段階設定とし、設定L記載は `CONFLICT_PRERELEASE_SECONDARY_VS_FINAL_MULTI_SOURCE` として保持。
- ベースはPiDEA導入前34.8G、最終解析群34.9G。丸め差としてcanonical 34.9G。

## missingFields
- 本機固有の設定変更時リールガックン条件/発生率
- 設定変更専用の内部モード振り分け
- 朝一約30G高確中の総CZ/AT当選率として比較可能な固定公開値

## sources
取得日: 2026-09-13

1. Greenbelt / P-WORLD — 検定通過
   - https://news.p-world.co.jp/articles/21194/greenbelt
   - 型式 `SボンバーガールPM`、KPEを確認。
   - reliability: INDUSTRY
2. P-MEDIA — ボンバーガール検定通過
   - https://p-media.info/post-28924/
   - 型式 `SボンバーガールPM`、メーカーKPEを確認。
   - reliability: INDUSTRY
3. HAZUSE — ボンバーガール
   - https://hazuse.com/machine/pachislot/2S0154/
   - 検定番号2S0154、性能・天井を確認。
   - reliability: ANALYSIS_HIGH / INDUSTRY_DB
4. HAZUSE — 基本スペック
   - https://hazuse.com/machine/pachislot/2S0154/genre/201/
   - 設定別BIG/CZ/AT、約34.9G/50枚を確認。
   - reliability: ANALYSIS_HIGH
5. 1geki — ボンバーガール
   - https://1geki.jp/slot/s_bomber_girl/
   - 導入日、6.5号機、設定別機械割/BIG/AT、ベース、純増、BIG獲得、AT基本性能を確認。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — ボーナス確率・機械割
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/18/kh02.php
   - 最終市場仕様が設定1/2/4/5/6の5段階、各確率/機械割を確認。
   - reliability: ANALYSIS_HIGH
7. なな徹 — 朝一・設定変更時の挙動/有利区間
   - https://nana-press.com/kaiseki/machine/408/11250/
   - 設定変更=有利区間/天井/状態RESET、据え置き=CARRY_OVER、昼ステージ、約30G高確、朝一ステージによる据え置き推測、有利区間ランプ非搭載を確認。
   - reliability: ANALYSIS_HIGH
8. Altema — ボンバーガール
   - https://altema.jp/pachimo/bonbergirl
   - 電源ON/OFF時の天井・内部状態・ステージ引継ぎ、設定変更時昼ステージ/高確を確認。
   - reliability: ANALYSIS_SINGLE_CROSSCHECK
9. PiDEA — 新台講座
   - https://www.pidea.jp/articles/1660621668
   - 導入前スペック、34.8G/50枚、各設定性能、設定L欄、RUSH平均獲得約869枚を確認。最終仕様との比較用。
   - reliability: INDUSTRY_SECONDARY_PRERELEASE
10. パチビー — 機種情報
   - https://www.pachibee.jp/machines/about/222070007
   - 2022-09-05導入、6.5号機、純増0.7/2.5枚を確認。
   - reliability: INDUSTRY_DB

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_SOURCE_LIMITS
confidence: INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET
