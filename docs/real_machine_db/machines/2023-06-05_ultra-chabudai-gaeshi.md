# ウルトラちゃぶ台返し

recordNo: 1571
machineName: ウルトラちゃぶ台返し
manufacturer: ベルコ
formalModel: SチャブダイEB6
inspectionCode: 2S1767
releaseDate: 2023-06-05
generation: 6.5号機 / メダル機
systemType: AT / 擬似ボーナス・周期CZ型
settings: L / 1 / 2 / 3 / 4 / 6

## payoutRateBySetting
- 設定L: 74.8%
- 設定1: 98.0%
- 設定2: 99.5%
- 設定3: 101.5%
- 設定4: 103.5%
- 設定6: 106.0%
信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## initialHitBySetting
### AT / 擬似ボーナス初当り
- 設定1: 1/240.3
- 設定2: 1/236.1
- 設定3: 1/231.2
- 設定4: 1/225.7
- 設定6: 1/221.4
- 設定L: 公開比較値なし

※G-netのみ設定3を1/234.2と掲載。ベルコ公式となな徹が1/231.2で一致するためcanonicalは1/231.2、1/234.2はCONFLICTとして保持。

## baseGamesPer50
- 約31G/50枚。

## netIncrease
- BIG / REGとも純増約4.0枚/G。

## basicPayout
- BIG「怒デカちゃぶボーナス」: 50G、約200枚。
- REG「熊猫ボーナス」: 20G、約80枚。
- BIG中にボーナスストック（1G連）抽選。
- ボーナス後は継続率約75～95%の「ちゃぶ連モード」突入チャンス。

## modeSpecificMinimumData
- 通常時は平均約70Gの周期抽選。1周期最大111G。
- 周期到達時は3種CZのいずれかへ。初回周期は「怒気っとロックチャレンジ」。
- 通常時777G消化で救済機能（天井）→ボーナス当選。
- 設定Lはデモ画面表示中の下パネル点滅で識別可能。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更: 有利区間RESET / 救済機能（天井）RESET / 内部モードRESET。
- 開始ステージは四畳半ステージ（昼）。
- 初回周期到達時CZは「怒気っとロックチャレンジ」。

### carryOverBehavior
- 据え置きでは設定変更を伴わないため、内部の有利区間・天井・モード進行は継続扱い。
- 純電源OFF→ON比較表で各要素引継ぎを直接確認できるため、単なる電断によるリセットとは区別する。

### powerCycleBehavior
- 純電源OFF→ON: 有利区間CARRY_OVER / 天井CARRY_OVER / 内部モードCARRY_OVER / ステージCARRY_OVER / 初回周期CZ状態CARRY_OVER。
- 一撃の本機固有比較表で直接確認。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常天井777G。

### ceilingAfterReset
- 設定変更後も救済天井は777G。固定の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし1周期目は必ず上位CZ「怒気っとロックチャレンジ」となるため、天井短縮とは別の朝一周期恩恵として保持。

### modeAfterReset
- 設定変更: RESET。
- 純電源OFF→ON: CARRY_OVER。
- ちゃぶ連等を含む全モードの詳細振り分けは完全再現対象外。

### stateAfterReset
- 設定変更時の内部モードRESETは直接確認。
- 個別高確状態までの全状態対比は公開粒度が不足するため一般論で補完しない。
- 純電源OFF→ONではステージを含め引継ぎ。

### advantageousSectionReset
- 設定変更: RESET。
- 純電源OFF→ON: CARRY_OVER。
- 一撃の本機固有設定変更 / 電断比較で確認。

### resetBenefits
- 設定変更後の初回周期到達時は、CZの中でボーナス期待度が最も高い「怒気っとロックチャレンジ」へ。
- 同CZのボーナス期待度は業界記事で約40%。
- 固定天井短縮は確認されない。

### resetPenalties
- 設定変更により前日の天井進行・内部モード・有利区間を失う。
- その他の設定変更専用不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時は四畳半ステージ（昼）開始、電源OFF→ONはステージ引継ぎのため、前日終了ステージを把握できる場合は補助的判別材料になり得る。
- 1周期目のCZが怒気っとロックチャレンジであることも変更後挙動と一致するが、通常の初回周期でも同様の仕様とする資料があり、単独で変更確定材料とはしない。
- 本機固有ガックン条件 / 発生率は表記揺れ・正式型式・ベルコと検索語を変えても `UNVERIFIED_AFTER_RESEARCH`。
- 設定Lはデモ画面中の下パネル点滅で識別可能だが、これは設定変更の有無ではなく現在設定Lであることの判別。

### numericResetData
- 通常天井: 777G。
- 初回周期: 最大111G、到達時CZは怒気っとロックチャレンジ。
- 怒気っとロックチャレンジのボーナス期待度: 約40%。
- 固定リセット天井短縮率: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更後初回周期は怒気っとロックチャレンジ（期待度約40%）。
- 通常天井は777Gのまま。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `ウルトラちゃぶ台返し / Sウルトラちゃぶ台返し / SチャブダイEB6 / ベルコ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / 有利区間` を組み替えて検索。
- ベルコ公式、公安委員会検定記事、業界プレス、一撃、なな徹、ちょんぼりすた、スロパチクエスト等を横断。

## sources
取得日: 2026-09-13
- ベルコ公式 発売リリース: https://www.s-bellco.co.jp/news/20230317_01/
- ベルコ公式 製品情報 / 初当り: https://www.s-bellco.co.jp/products/slot/ultrachabudai/
- 遊技通信 / 東京都公安委員会検定（2S1767）: https://news.p-world.co.jp/articles/23427/yugitsushin
- ゼンリン 型式・主要仕様: https://zenrin-net.co.jp/7303/
- Amusement Japan 試打会: https://amusement-japan.co.jp/article/detail/10003361/
- P-BOMB 新機種発表: https://p-bomb.co.jp/industry/new-machine/6615/
- G-net 販売概要: https://g-net-ps.com/info/s0061/
- 一撃 天井 / 設定変更 / 電源OFF ON: https://1geki.jp/slot/s_ultra_chabu/3/
- なな徹 AT確率 / 機械割: https://nana-press.com/kaiseki/machine/551/14673/
- ちょんぼりすた: https://chonborista.com/slot/belko-slot/186002/
- スロパチクエスト: https://www.slopachi-quest.com/article/ultrachabudaigaesi-tenjou/

## missingFields
- 本機固有ガックン: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の全内部状態詳細: PARTIAL_DIRECT_DISCLOSURE

## conflicts
- 設定3 AT初当り: ベルコ公式 / なな徹 1/231.2 vs G-net 1/234.2。平均せずcanonical=1/231.2、alternate=1/234.2を保持。

coreStatus: COMPLETE_CORE
status: COMPLETE_CORE_RESET_V07
