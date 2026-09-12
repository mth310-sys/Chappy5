# パチスロ ダンまち外伝 ソード・オラトリア

recordNo: 1527
machineName: パチスロ ダンまち外伝 ソード・オラトリア
manufacturer: ゼクロスクリエイティブ / 北電子
formalModel: Sダンまち外伝XR
inspectionCode: 2S0791
releaseDate: 2022-10-17
generation: 6.4号機
systemType: AT / 差枚数管理 / 擬似ボーナス経由AT

## payoutRateBySetting
- 設定1: 98.05%（主要解析の丸め表記98.1%）
- 設定2: 99.02%（99.0%）
- 設定3: 100.50%（100.5%）
- 設定4: 104.05%（104.1%）
- 設定5: 107.06%（107.1%）
- 設定6: 110.16%（110.2%）

K-Naviの精密値と複数解析の丸め値は丸め精度差として整合。
信頼度: ANALYSIS_HIGH

## initialHitBySetting
### AT初当り
- 設定1: 1/378.9
- 設定2: 1/365.1
- 設定3: 1/349.5
- 設定4: 1/304.6
- 設定5: 1/275.1
- 設定6: 1/252.1

### CZ突入率（比較用公開値）
- 設定1: 約1/199
- 設定2: 約1/196
- 設定3: 約1/193
- 設定4: 約1/188
- 設定5: 約1/180
- 設定6: 約1/172

信頼度: ANALYSIS_HIGH

## baseGamesPer50
- 約40G/50枚。

信頼度: ANALYSIS_HIGH

## netIncrease
- AT「ファミリアミィス」: 約2.0枚/G。

信頼度: OFFICIAL / ANALYSIS_HIGH

## basicPayout
- ATは初当り時に擬似ボーナスを経由し、そこで初期差枚数を決定。
- 「ディヴァインジャッジ」: 3G×継続型。AT初期差枚数を上乗せ。
- 「ファミリアボーナス」: 40Gの上位ボーナス。
- AT「ダンジョンオラトリア」: 差枚数管理型、最低50枚保証＋ボーナスで決定した上乗せ分。
- AT継続はモンスターバトル勝利型で、公開資料上のバトル勝率は約66%over。

信頼度: OFFICIAL / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は周期抽選が中心。1周期は概ね30～90G。
- CZ「モンスターバトル市街戦」成功期待度は約45%over。
- AT天井: 通常時777G消化後の周期ジャッジ（ハグちゃれ）到達でAT。周期位置により実戦上は777Gを超えて発動する場合がある。
- CZ周期天井: 最大11周期でCZ以上。
- 通常モードはA/B/C。最大周期はA=11、B=8、C=5周期。
- 途中CZ当選でAT天井ゲーム数がリセットされる解析があり、ゲーム数天井はCZ間/AT間の定義を混同しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_NO_CONFIRMED_SPECIAL_BENEFIT
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井ゲーム数RESET。
- 内部モードRESET。
- 内部状態RESET。
- 設定変更専用の固定高モード・短縮天井・確定CZ等の強い朝一恩恵は、十分な再探索後も固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は有利区間・天井ゲーム数・内部モード・内部状態を引き継ぐ側として複数解析で整合。
- 前日ゲーム数/周期進行を把握できる場合、翌日の進行との比較が据え置き推測材料になる。

### powerCycleBehavior
- 純電源OFF→ONのみでは、天井・内部モード・内部状態を引き継ぐと複数解析で一致。
- 有利区間についてもスロパチクエストの比較表で「引き継ぐ」と明記。
- 設定変更との挙動差が確認できるため、`CARRY_OVER` として扱う。

### gameCounterReset
- 設定変更: 天井ゲーム数RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 本機の777G天井は周期ジャッジ到達を伴うため、液晶/データカウンタ上の見かけG数と内部発動タイミングを同一視しない。

### ceilingAfterReset
- 通常AT天井は777G+周期ジャッジ到達。
- 周期天井は最大11周期。
- 設定変更専用の天井短縮は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一専用の短縮周期数も `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更: 内部モードRESET/再選択。
- 据え置き・純電源OFF→ON: 内部モードCARRY_OVER。
- 設定変更時専用のA/B/C振り分けは、機種名・型式・メーカー・「リセット/朝一/モード選択率/設定変更時振り分け」を組み替えて再探索したが、通常の設定別モード選択率と設定変更専用抽選を区別できる一次・高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き・純電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更後の具体的な高確移行率/固定状態は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 本機は6.4号機で有利区間上限3000G。
- 有利区間ランプ非搭載のため、ランプによる設定変更/据え置き判別は不可。

### resetBenefits
- 設定変更で天井・内部モード・内部状態が初期化される。
- 朝一のみ適用される固定高モード、短縮天井、CZ確定などの主要なプラス恩恵は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一部攻略資料は「リセット恩恵 特になし」、別資料は「現在調査中」としており、強い恩恵を断定できる公開根拠はない。

### resetPenalties
- 設定変更専用の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のためランプ判別不可。
- 前日ゲーム数/周期進行や内部状態の引継ぎが見える状況では据え置き推測材料になり得るが、単独で確定判別できる仕様ではない。
- 周期開始時のチュートリアル系ステージは通常ゲーム性でも出現するため、朝一の見た目だけで設定変更確定とはしない。
- 本機固有のリールガックン条件/発生率は、複数検索語・資料系統で再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更専用モードA/B/C振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用CZ/AT当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更後の状態移行率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 朝一設定変更専用として比較可能な確率・振り分け値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常の設定別モード選択率・AT直撃率等は存在するが、リセット専用値ではないため本欄へ転用しない。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `ダンまち外伝 / ソード・オラトリア / Sダンまち外伝XR / 2S0791 / ゼクロスクリエイティブ / 北電子` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電源オンオフ / 天井 / 天井短縮 / モード / モード振り分け / 状態 / ガックン / 有利区間 / リセット判別` を組み替えて再探索。
- 北電子公式製品/検定情報、P-WORLD業界記事、PiDEA検定、K-Navi、パチマガスロマガ、パチ7、スロパチクエスト、Altema、ちょんぼりすた、パチスロメソッド、後年整理資料を横断。
- 設定変更/電源OFF→ONの天井・内部状態・内部モード・有利区間は複数解析で整合。
- 朝一専用の強い恩恵、専用モード振り分け、ガックンは十分な再探索後も固定できなかった。

## conflicts
- メーカー表記は一般機種DBで「北電子」とされる一方、検定上の型式申請会社はゼクロスクリエイティブ。DBでは `ゼクロスクリエイティブ / 北電子` と役割を分けて保持。
- 出玉率はK-Naviが98.05～110.16%、多数解析が98.1～110.2%。丸め精度差であり数値CONFLICTとは扱わない。
- リセット恩恵は一部資料が「特になし」、別資料が「調査中」。公開された固定恩恵を積極認定できない点では整合するため、`NONE_CONFIRMED_AFTER_RESEARCH` とする。

## missingFields
- 設定変更専用のモードA/B/C振り分け
- 設定変更後の内部状態具体値
- 朝一専用のCZ/AT当選率等の公開比較数値
- 本機固有ガックン条件/発生率

## sources
取得日: 2026-09-13

1. 北電子 — 公式製品情報
   - https://www.kitadenshi.co.jp/slot/sword_oratoria/
   - 製品名、公式製品存在、純正製品ページを確認。
   - reliability: OFFICIAL
2. 北電子 — 検定情報 `Sダンまち外伝XR`
   - https://www.kitadenshi.co.jp/slot-kentei/sword_oratoria/
   - 正式型式を確認。
   - reliability: OFFICIAL
3. PiDEA X — 東京都公安委員会検定通過
   - https://www.pidea.jp/articles/1660024373
   - 型式 `Sダンまち外伝XR`、検定番号 `2S0791`、ゼクロスクリエイティブを確認。
   - reliability: INDUSTRY
4. P-WORLD業界ニュース / 遊技日本 — 検定通過
   - https://news.p-world.co.jp/articles/21266/nippon
   - 型式 `Sダンまち外伝XR`、ゼクロスクリエイティブを確認。
   - reliability: INDUSTRY
5. K-Navi — 機種基本情報
   - https://p-kn.com/slot/3847/
   - 2022-10-17導入、AT初当り、精密機械割、約40G/50枚、純増約2.0枚/Gを確認。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 機種概要
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/118/kh01.php
   - 2022年10月、AT純増約2.0枚/G、CZ期待度約45%over、AT継続バトル約66%overを確認。
   - reliability: ANALYSIS_HIGH
7. Altema / パチーモ — 天井・リセット・有利区間
   - https://altema.jp/pachimo/swordoratoria
   - 777G+α天井、11周期、設定変更で天井/状態RESET、電源ON/OFFで引継ぎ、有利区間ランプ非搭載を確認。
   - reliability: ANALYSIS_HIGH
8. スロパチクエスト — 朝一設定変更・リセット
   - https://www.slopachi-quest.com/article/danmachi-sword-oratoria-tenjou/
   - 設定変更で有利区間/天井/内部モードRESET、電源OFF→ONで引継ぎ、リセット恩恵/判別は当時調査中を確認。
   - reliability: ANALYSIS_HIGH
9. ちょんぼりすた — スペック/朝一リセット
   - https://chonborista.com/slot/kitadenshi/173810/
   - AT初当り/機械割/ベース/純増、設定変更時天井・内部状態RESET、電源OFF→ON引継ぎ、有利区間ランプ非搭載を確認。
   - reliability: ANALYSIS_HIGH
10. パチスロメソッド — リセット判別/恩恵
   - https://slotmethod.jp/archives/15436/
   - 有利区間ランプ非搭載、リセット恩恵「特になし」、周期進行を使った推測可能性を確認。
   - reliability: ANALYSIS_SINGLE
11. パチ7 — 機種基本/天井
   - https://pachiseven.jp/machines/6619/cutout/3
   - メーカー `ゼクロスクリエイティブ / 北電子`、2022-10-17導入、6.4号機、777G/11周期天井を確認。
   - reliability: ANALYSIS_HIGH
12. イチカツ — 2022年新台カレンダー
   - https://ichikatsu.com/newslot2022/
   - 2022-10-17導入、AT初当り、機械割、約40G/50枚、純増約2.0枚/Gを照合。
   - reliability: ANALYSIS_SINGLE

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_NO_CONFIRMED_SPECIAL_BENEFIT
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH
