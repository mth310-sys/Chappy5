# パチスロ バイオハザード RE:2

recordNo: 1524
machineName: パチスロ バイオハザード RE:2
manufacturer: アデリオン（ユニバーサルエンターテインメント系）
formalModel: SバイオハザードRE:2 XB
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2022-10-03
generation: 6.5号機
systemType: 疑似ボーナス+AT / CZ経由 / G数上乗せAT

## payoutRateBySetting
- 設定1: 98.0%
- 設定2: 99.1%
- 設定3: 101.0%
- 設定4: 105.1%
- 設定5: 107.9%
- 設定6: 110.0%

P-WORLD、必勝本、K-Navi等で一致。
信頼度: ANALYSIS_HIGH

## initialHitBySetting
### AT初当り
- 設定1: 1/343.4
- 設定2: 1/331.6
- 設定3: 1/314.1
- 設定4: 1/276.8
- 設定5: 1/256.2
- 設定6: 1/242.1

初当り時はボーナス+ATから開始。
信頼度: ANALYSIS_HIGH

## baseGamesPer50
- 約36.0G/50枚。

信頼度: ANALYSIS_HIGH

## netIncrease
- AT「HAZARD RUSH」: 約1.0枚/G。
- 疑似ボーナス: 約4.5枚/G。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- HAZARD BONUS等の疑似ボーナス: 約100枚。
- AT「HAZARD RUSH」: 初期40G+α、純増約1.0枚/G。
- 通常時CZ「G BATTLE」: 突入約1/124、成功期待度約36%の掲載あり。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は主にCZ「G BATTLE」から初当りを目指し、初当り時は疑似ボーナス+ATへ突入。
- ゲーム数天井: 通常時1000G消化後、リプレイまたはレア役成立で前兆を経由してボーナス+AT。
- CZスルー天井: 最大7スルー。8回目のG BATTLEでボーナス+AT。
- 設定変更後/AT終了後にCZスルー回数天井を再抽選。
- 有利区間ランプによる朝一変更判別は不可。通常時はランプ消灯運用で、見た目から有利区間リセットを判別できない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_LOW_LEVEL_DETAILS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- ゲーム数天井RESET。
- CZ「G BATTLE」スルー回数RESET後、スルー天井を再抽選。
- 内部状態RESET後、必ず30G継続の武器高確から開始。
- 表示ステージは警察署系開始とする複数解析が一致。

### carryOverBehavior
- 据え置きは天井ゲーム数、CZスルー回数、内部状態、有利区間をCARRY_OVERとして保存。
- 設定変更を伴わない純電源OFF→ONで各項目が引き継がれる直接比較資料と整合する。

### powerCycleBehavior
- 純電源OFF→ON: 天井ゲーム数CARRY_OVER。
- CZスルー回数CARRY_OVER。
- 内部状態CARRY_OVER。
- 有利区間CARRY_OVER。
- 表示ステージは警察署系へ戻る資料があり、表示初期化と内部状態引継ぎを分離して扱う。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 通常ゲーム数天井: 1000G消化後のリプレイ/レア役成立でボーナス+AT。
- CZスルー天井: 最大7スルー、8回目でボーナス+AT。
- 設定変更専用のゲーム数天井短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後はCZスルー天井そのものを再抽選するため、前日のスルー回数は引き継がない。

### modeAfterReset
- 設定変更後/AT終了後にG BATTLEスルー回数天井を再抽選。
- スルー天井の詳細振り分け数値は今回の物差し収集範囲で高信頼の全表を固定せず、最大7スルーのみcanonicalとする。
- 朝一専用の別モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 必ず30Gの武器高確状態から開始。
- 据え置き/純電断: 内部状態CARRY_OVER。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- AT終了時は必ず有利区間が切れるわけではなく、差枚数マイナス時は基本的に引き継ぐとする解析がある。
- 有利区間ランプから朝一リセット判別はできない。

### resetBenefits
- 設定変更後は必ず30G継続の武器高確から開始。
- 武器獲得によりG BATTLE当選率/成功率の底上げにつながるため、朝一客行動に影響する主要恩恵として保持。
- 設定変更専用の天井短縮は確認されない。

### resetPenalties
- 前日天井G数・CZスルー回数・内部状態を消去するため、宵越し狙いでは不利になり得る。
- 設定変更専用の追加冷遇抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプによる変更判別不可。
- 設定変更後は30G武器高確だが、外観だけで100%変更確定とする資料はないため「挙動注目」レベルで保持。
- 設定変更/純電断とも警察署系開始資料があり、開始ステージ単独では変更判別不可。
- タイラント高確示唆の足跡演出は当日ゲーム数参照とされ、前日据え置き判別には使えない。
- 本機固有ガックンの高信頼契約は `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更後武器高確: 30G。
- 通常ゲーム数天井: 1000G消化後のリプレイ/レア役成立。
- CZスルー天井: 最大7スルー、8回目で当選。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更後の確定公開朝一数値として、武器高確30Gを保存。
- 設定変更専用の初当り期待度・CZ当選率等の比較可能な公式/高信頼公開値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ バイオハザード RE:2 / バイオRE2 / SバイオハザードRE:2 XB / アデリオン / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / CZスルー / 武器高確 / 有利区間 / ガックン` を組み替えて再探索。
- P-WORLD、なな徹、1geki、パチ7、必勝本、K-Navi、当時業界記事を横断。
- 設定変更対純電断の天井・内部状態比較、および30G武器高確は複数解析で一致。

## conflicts
- メーカー表記は一般向けDBで「エンターライズ」表記が混在するが、検定通過・業界発表では型式 `SバイオハザードRE:2 XB` のメーカーをアデリオンとしているためcanonicalをアデリオンとする。流通ブランド/グループ表記差として扱う。
- 天井恩恵は「AT当選」「ボーナス+AT」と表現差があるが、初当りがボーナス経由ATであるため実質同一フローとして保持。

## missingFields
- numeric inspectionCode（検定通過型式名は確認済みだが、独立した検定番号コードは今回固定できず）
- 本機固有ガックン条件/発生率
- 設定変更専用の初当り期待度/CZ当選率等の確定朝一数値
- 低レイヤの演出履歴・成立済み内部フラグ等の完全契約

## sources
取得日: 2026-09-13

1. P-WORLD / 遊技日本 — 検定通過
   - https://news.p-world.co.jp/articles/21195/nippon
   - `SバイオハザードRE:2 XB`、アデリオンを確認。
   - reliability: INDUSTRY
2. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/9691
   - 設定別AT初当り、出玉率、約36.0G/50枚、天井、設定変更/電断比較を確認。
   - reliability: ANALYSIS_HIGH
3. グリーンべると / P-WORLD — 新機種発表
   - https://news.p-world.co.jp/articles/21278/greenbelt
   - アデリオン製、純増1.0枚/G AT、疑似ボーナス約4.5枚/G、初当り=ボーナス+AT、AT初期40G+αを確認。
   - reliability: INDUSTRY
4. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/3963/1/90049
   - 設定別AT初当り・機械割、2022-10-03導入を照合。
   - reliability: ANALYSIS_HIGH
5. なな徹 — 機種解析 / 朝一・有利区間
   - https://nana-press.com/kaiseki/machine/438/
   - https://nana-press.com/kaiseki/machine/438/11888/
   - 約36.0G/50枚、天井、設定変更後30G武器高確、有利区間ランプ判別不可等を確認。
   - reliability: ANALYSIS_HIGH
6. 1geki — 天井・朝一
   - https://1geki.jp/slot/s_bhr2/3/
   - 1000G天井、最大7スルー/8回目当選、設定変更後のスルー天井再抽選を確認。
   - reliability: ANALYSIS_HIGH
7. パチ7 — 朝一/リセット
   - https://pachiseven.jp/machines_v2/6600
   - 設定変更で天井・内部状態RESET、電断で引継ぎ、警察署開始、30G武器高確を照合。
   - reliability: ANALYSIS_HIGH

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_LOW_LEVEL_DETAILS
