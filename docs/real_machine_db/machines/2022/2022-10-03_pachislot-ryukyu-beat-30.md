# パチスロRYUKYU BEAT-30

recordNo: 1525
machineName: パチスロRYUKYU BEAT-30
manufacturer: ロデオ（サミーブランド/販売）
formalModel: S RYUKYU Beat-30 FR
inspectionCode: 1S1418
releaseDate: 2022-10-03
generation: 6.1号機
systemType: 30Φ / NEO-A / 擬似ボーナスAT / 完全告知

## payoutRateBySetting
- 設定1: 97.5%
- 設定2: 98.9%
- 設定3: 101.1%
- 設定5: 106.1%
- 設定6: 109.2%
- 設定L: 数値非公開/未確認。待機中は下パネル消灯。

HAZUSE、1geki、なな徹等で一致。
信頼度: ANALYSIS_HIGH

## initialHitBySetting
### 通常時ボーナス初当り
- 設定1: BB合算 1/344.7 / REG 1/420.6 / 全ボーナス合算 1/189.4
- 設定2: BB合算 1/335.9 / REG 1/409.8 / 全ボーナス合算 1/184.6
- 設定3: BB合算 1/323.4 / REG 1/394.4 / 全ボーナス合算 1/177.7
- 設定5: BB合算 1/295.9 / REG 1/359.2 / 全ボーナス合算 1/162.3
- 設定6: BB合算 1/286.0 / REG 1/346.8 / 全ボーナス合算 1/156.7

### 通常時ボーナス種別内訳
- HYPER BIG: 1/995.8 / 1/971.1 / 1/935.8 / 1/861.9 / 1/833.6（設定1/2/3/5/6）
- NORMAL BIG: 1/527.1 / 1/513.6 / 1/494.1 / 1/450.6 / 1/435.3
- REG: 1/420.6 / 1/409.8 / 1/394.4 / 1/359.2 / 1/346.8

1G連込みの全ボーナス合算は 1/127.1 / 1/122.4 / 1/115.8 / 1/100.9 / 1/95.6。
信頼度: ANALYSIS_HIGH

## baseGamesPer50
- 設定1: 33.1G/50枚
- 設定2: 33.4G/50枚
- 設定3: 33.8G/50枚
- 設定5: 34.4G/50枚
- 設定6: 34.8G/50枚

信頼度: ANALYSIS_HIGH

## netIncrease
- 擬似ボーナス: 約3.0枚/G。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- HYPER BIG: 約300枚。
- NORMAL BIG: 約200枚。
- REG: 約100枚。
- ボーナス中も通常時と同じ抽選系でボーナスを抽選し、当選分は1G連で放出。
- 初当り時の1G連込み平均期待獲得枚数: 設定1 263枚 / 設定2 266枚 / 設定3 270枚 / 設定5 283枚 / 設定6 288枚。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData
- Aタイプ風の完全告知ゲーム性を擬似ボーナスATで実現した「NEO-A」。
- 通常時・ボーナス中とも全役でボーナス抽選。スイカ成立時の同時当選期待度は約20%。
- 特定G数ゾーンによる当選システムは確認されず、HAZUSEも「特に当りやすいゾーンなどは搭載されていない模様」とする。
- 天井非搭載。
- 1G連込み100G以内当選割合は設定1 60.4% / 2 61.5% / 3 62.9% / 5 66.4% / 6 67.8%。これは設定変更専用朝一値ではなく、1G連を含む通常統計のためresetBehaviorの朝一恩恵とは分離する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_RESEARCH_EXHAUSTED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時のボーナス内部抽選状態、成立済みストック、告知待ち状態等を直接規定する機種別高信頼資料は `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため、設定変更に伴う天井ゲーム数RESET/短縮は `NOT_APPLICABLE`。
- 設定変更専用の朝一モード・優遇状態・固定初当り優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時の成立済みボーナスストック/本前兆/告知待ち状態等の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- ゲーム数天井は非搭載のため、宵越し天井カウンタ引継ぎは `NOT_APPLICABLE`。

### powerCycleBehavior
- 電源OFFで「リプレイ報知モード」がリセットされることを、なな徹・HAZUSEで確認。
- これは遊技補助設定の表示/操作状態であり、ボーナス抽選状態や設定変更そのものとは分離して保存する。
- 純電源OFF→ON時の成立済みボーナスストック、本前兆、内部抽選状態、有利区間状態の機種別直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 天井ゲーム数カウンタ: `NOT_APPLICABLE`（天井非搭載）。
- TOTALゲーム数/ボーナス回数の表示機能は存在するが、設定変更・純電断時に何を保持/初期化するかの機種別直接資料は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 天井非搭載。
- 設定変更専用短縮天井: `NOT_APPLICABLE`。

### modeAfterReset
- 天井モード/規定G数モードは `NONE_CONFIRMED`。
- 設定変更専用の朝一モード振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更/据え置き/純電断ごとの内部状態再抽選・引継ぎを示す機種別高信頼資料は `UNVERIFIED_AFTER_RESEARCH`。
- 一般的6.1号機挙動からの推測補完は行っていない。

### advantageousSectionReset
- 6.1号機AT機だが、設定変更/据え置き/純電断別の有利区間の直接機種資料を今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプを用いた本機固有の朝一変更判別資料も `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBenefits
- 天井短縮、朝一専用モード、設定変更専用初当り優遇などの主要恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 1～100G当選割合60.4～67.8%は1G連を含む通常統計で、リセット恩恵ではない。

### resetPenalties
- 設定変更専用の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有ガックン、初期出目、ランプ状態、開始ゲーム挙動による設定変更/据え置き判別は `UNVERIFIED_AFTER_RESEARCH`。
- 設定Lは待機中の下パネル消灯で判別可能だが、これは現在設定Lであることの判別要素であり「設定変更されたか」の判別とは別。
- リプレイ報知モードは電源OFFでもリセットされるため、OFF状態のみを設定変更判別に使えない。

### numericResetData
- 天井: 非搭載。
- 設定変更専用短縮天井: `NOT_APPLICABLE`。
- 設定変更専用モード振り分け/朝一当選率/優遇発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更専用の比較可能な朝一数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 参考値として通常統計の1G連込み1～100G当選割合は設定1 60.4% / 2 61.5% / 3 62.9% / 5 66.4% / 6 67.8%だが、朝一リセット値としては使用しない。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロRYUKYU BEAT-30 / RYUKYU BEAT / 琉球ビート / S RYUKYU Beat-30 FR / ロデオ / サミー` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン / 有利区間 / リセット判別` を組み替えて再探索。
- 検定通過記事、HAZUSE、1geki、なな徹、パチ7、当時紹介動画/記事を横断。
- 天井非搭載は複数系統で確認。設定変更専用恩恵・不利・変更判別の高信頼直接資料は固定できなかったため推測補完せず未確認扱い。
- 純電断についてはリプレイ報知モードだけ直接リセット契約を確認。

## conflicts
- manufacturer表記は一般DBで「サミー」とされることが多いが、公安委員会の検定通過記事は正式型式 `S RYUKYU Beat-30 FR` の申請主体を株式会社ロデオとしている。canonicalは `ロデオ（サミーブランド/販売）` とし、ブランド/製造・申請主体の表記差として保持。
- クオぱち掲載の全ボーナス合算・設定1が1/189.4、紹介動画説明に1/189.2表記がある。1geki・なな徹等の解析表が1/189.4で一致するためcanonicalは1/189.4とし、1/189.2を丸め/転記差のCONFLICT候補として保持。

## missingFields
- 設定変更/据え置き/純電断時の成立済みボーナスストック・本前兆・内部抽選状態の直接契約
- 有利区間の設定変更/据え置き/純電断別直接契約
- 本機固有ガックン/初期出目/朝一ランプ等の変更判別
- 設定変更専用の朝一優遇/不利および比較可能な公開数値
- 設定Lの機械割・初当り数値

## sources
取得日: 2026-09-13

1. P-WORLD / 遊技日本 — 検定通過
   - https://news.p-world.co.jp/articles/19137/nippon
   - `S RYUKYU Beat-30 FR`、株式会社ロデオを確認。
   - reliability: INDUSTRY
2. HAZUSE — 機種DB
   - https://hazuse.com/machine/pachislot/1S1418/
   - 型式、検定番号1S1418、導入日、6.1号機AT、出玉率、純増、天井/内部状態関連を確認。
   - reliability: ANALYSIS_HIGH
3. 1geki — ボーナス確率
   - https://1geki.jp/slot/s_ryukyubeat30/1/
   - 通常時初当り、1G連込み確率を確認。
   - reliability: ANALYSIS_HIGH
4. 1geki — 小役/ベース
   - https://1geki.jp/slot/s_ryukyubeat30/4/
   - 設定別33.1～34.8G/50枚を確認。
   - reliability: ANALYSIS_HIGH
5. 1geki — 天井/設定変更
   - https://1geki.jp/slot/s_ryukyubeat30/3/
   - 天井非搭載を確認。
   - reliability: ANALYSIS_HIGH
6. なな徹 — スペック/設定差
   - https://nana-press.com/kaiseki/machine/392/9787/
   - 機械割、ボーナス確率、ベース、設定L下パネル消灯を照合。
   - reliability: ANALYSIS_HIGH
7. なな徹 — ボーナス概要
   - https://nana-press.com/kaiseki/machine/392/11997/
   - HBB約300枚/BIG約200枚/REG約100枚、1G連期待値、電源OFFでリプレイ報知モードRESETを確認。
   - reliability: ANALYSIS_HIGH
8. HAZUSE — 演出
   - https://hazuse.com/machine/pachislot/1S1418/genre/202/
   - TOTALゲーム数/各ボーナス回数表示、電源OFFでリプレイ報知モードRESETを照合。
   - reliability: ANALYSIS_HIGH
9. パチ7 — ボーナス解析
   - https://pachiseven.jp/machines/6560/cutout/8
   - 擬似ボーナス純増約3.0枚/G、獲得枚数、ボーナス中1G連抽選を照合。
   - reliability: ANALYSIS_HIGH

coreStatus: COMPLETE_CORE
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED
