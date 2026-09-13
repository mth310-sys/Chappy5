# スマスロ バイオハザード:ヴェンデッタ

recordNo: 1579
machineName: スマスロ バイオハザード:ヴェンデッタ
manufacturer: ロデオ製造 / サミー
formalModel: L バイオハザードヴェンデッタ FK
inspectionCode: 3S0143
releaseDate: 2023-07-24
generation: 6.5号機 / スマスロ
systemType: AT / 直AT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.8%
- 設定2: 98.8%
- 設定3: 101.5%
- 設定4: 106.0%
- 設定5: 108.5%
- 設定6: 112.0%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT初当たり
- 設定1: 1/395.7
- 設定2: 1/386.2
- 設定3: 1/354.2
- 設定4: 1/316.6
- 設定5: 1/312.4
- 設定6: 1/307.2
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約33.2G/50枚（設定1目安）
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「ヴェンデッタモード」: 約2.0枚/G
- ヴェンデッタボーナス / ハザードゾーン: 約4.0枚/G
- 上位AT「プレミアムヴェンデッタモード」: 約4.0枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- メインAT「ヴェンデッタモード」: 1セット40G+α、AT突入時期待枚数約510枚。
- ヴェンデッタボーナス: 赤7は初期10G・平均5セット、青7は初期30G・平均7セット（2セット目以降10G固定）。
- 上位AT「プレミアムヴェンデッタモード」: 純増約4.0枚/G、ループ率約90%超、突入時期待枚数約3600枚（設定1）。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は規定ゲーム数消化とレア役抽選からATへ直行し、CZ非搭載。
- 通常時の内部モードはモードA / B / C / D / 天国 / 超天国。
- モード別最大天井: A 810G+α / B 710G+α / C 610G+α / D 310G+α / 天国・超天国 128G+α。
- 通常時最大天井は810G+αでAT当選。
- 128G付近までのAT当選期待度は約33%、256G付近まで約52%（規定G数・小役抽選を含む通常条件の公開値であり、設定変更専用値ではない）。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は **有利区間 / 天井ゲーム数 / 内部状態 / 規定ゲーム数モードをリセット**。
- モード移行抽選を行い、**モードC以上への移行が濃厚**。
- そのため設定変更後の最大天井は通常810G+αから **610G+α以内**へ短縮される。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は **有利区間 / 天井ゲーム数 / 内部状態 / モードを引き継ぐ**とする解析表を採用。
- 前日進行を失わないため、深いハマリやモード状況を持ち越し得る。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは、機種別の朝一比較資料で **天井 / 内部状態を引き継ぐ**ことを直接確認。
- 純電源OFF→ON時の内部モード・有利区間そのものについて、設定変更/据え置き表とは別に「電源OFF→ON」を明記した直接資料では今回固定できず、据え置き挙動から推測転記せず `UNVERIFIED_AFTER_RESEARCH` とする。
信頼度: ANALYSIS_HIGH（天井・状態） / UNVERIFIED（純電断時モード・有利区間の独立明記）

### gameCounterReset
- 設定変更: 内部ゲーム数 / 天井進行をリセット。
- 据え置き: 引き継ぎ。
- 純電源OFF→ON: 天井進行を引き継ぎ。

### ceilingAfterReset
- 通常最大天井: **810G+α**（モードA）。
- 設定変更時: **モードC以上濃厚のため最大610G+α**。
- 短縮幅: 通常最深条件との比較で **200G短縮**。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時はモード再抽選。
- **モードC / D / 天国 / 超天国のいずれか＝モードC以上濃厚**。
- 設定変更専用のC/D/天国/超天国それぞれの固定振り分け率は、機種名・型式・メーカー名と `設定変更 / リセット / 朝一 / モード振り分け / モード移行` を組み替え、当時解析・後年整理資料を横断したが公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 据え置き: モード引き継ぎ。
- 純電源OFF→ONのモード引き継ぎを独立明記した機種固有資料は `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH / PARTIAL_DIRECT_DISCLOSURE

### stateAfterReset
- 設定変更: 内部状態リセット。
- 据え置き: 内部状態引き継ぎ。
- 純電源OFF→ON: 内部状態引き継ぎ。
- 通常時の状態は通常 / 高確が存在するが、設定変更直後の通常/高確の専用固定振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き: 有利区間引き継ぎ。
- 有利区間ランプでは設定変更 / 据え置き判別不可。
- 純電源OFF→ON時の有利区間について「電源OFF→ON」を直接明記した独立比較資料は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH（設定変更・据え置き）

### resetBenefits
- 最大天井が810G+α → **610G+α以内**へ短縮。
- 設定変更後はモードC以上スタート濃厚となり、モードA/Bを回避する。
- 朝一リセット台は通常条件より浅いゲーム数から天井・ゾーン狙い対象になり得るため、ホール経営ゲームの朝一客AIに影響する明確な恩恵。

### resetPenalties
- 設定変更により前日の内部ゲーム数・天井進行・内部状態・モード・有利区間を失う。
- 設定変更専用の追加不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプによる設定変更 / 据え置き判別は不可。
- モードA/Bの最深部まで到達せず610G+α以内で当選する挙動はリセット推測材料になり得るが、ATはレア役・規定G数でも当選するため単独の確定判別要素ではない。
- 当時解析ではリセット判別自体を「調査中」とする資料が残る。
- 本機固有のリールガックン条件・発生率は `スマスロ バイオハザード:ヴェンデッタ / L バイオハザードヴェンデッタ FK / ロデオ / サミー` と `ガックン / 設定変更 / リセット / 朝一 / 据え置き` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常最大天井: **810G+α**。
- 設定変更後最大天井: **610G+α**。
- 設定変更後: **モードC以上濃厚**。
- モードC天井: 610G+α。
- モードD天井: 310G+α。
- 天国 / 超天国天井: 128G+α。
- 設定変更専用の各モード個別振り分け率: **PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH**。

### publicMorningNumbers
- 設定変更後最大天井: **610G+α**。
- 通常最深天井810G+α比: **200G短縮**。
- 設定変更後のモード: **モードC以上濃厚**（個別％は未公開確認）。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `スマスロ バイオハザード:ヴェンデッタ / バイオハザード ヴェンデッタ / L バイオハザードヴェンデッタ FK / ロデオ / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード振り分け / 内部状態 / ガックン / 有利区間` を組み替えて探索。
- サミー発売発表系業界記事、HAZUSE、なな徹、パチマガスロマガ、パチ＆スロ必勝本、一撃、K-Navi、当時のリセット攻略整理資料を横断。
- 固定できなかった項目は、設定変更時C/D/天国/超天国の個別振り分け率、本機固有ガックン、純電源OFF→ON時モード/有利区間の独立明記。推測補完していない。

## sources
取得日: 2026-09-13

1. 遊技日本 / P-WORLD — サミー発売発表
   - https://news.p-world.co.jp/articles/24014/nippon
   - AT初当たりレンジ、純増約2枚/約4枚、AT期待枚数約510枚、今夏導入予定。
   - confidence: INDUSTRY

2. 遊技日本 / P-WORLD — ロデオ販売発表
   - https://news.p-world.co.jp/articles/24077/nippon
   - 製造元ロデオ、型式 `L バイオハザードヴェンデッタ FK`、純増2/4枚/G、設定別AT初当たり。
   - confidence: INDUSTRY

3. HAZUSE — 機種DB / 天井・設定判別
   - https://hazuse.com/machine/pachislot/3S0143/
   - 型式 `L バイオハザードヴェンデッタ FK`、検定番号 `3S0143`、導入2023-07-24、純増、AT構造、ボーナス、上位AT。
   - confidence: ANALYSIS_HIGH

4. なな徹 — AT確率/機械割/小役確率
   - https://nana-press.com/kaiseki/machine/572/15021/
   - 設定別AT初当たり、機械割、約33.2G/50枚。
   - confidence: ANALYSIS_HIGH

5. なな徹 — 朝一・設定変更時の挙動
   - https://nana-press.com/kaiseki/machine/572/15992/
   - 設定変更で有利区間/天井/内部状態/モードRESET、据え置きは引き継ぎ、設定変更後モードC以上濃厚、610G+α以内、有利区間ランプ判別不可。
   - confidence: ANALYSIS_HIGH

6. パチマガスロマガ — 通常時の内部モード
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/205/tj04.php
   - モードA/B/C/D/天国/超天国の天井、設定変更時のモード移行。
   - confidence: ANALYSIS_HIGH

7. パチ＆スロ必勝本 — モード移行抽選
   - https://p.hisshobon.jp/machine/4097/1/96332
   - モード別最大天井、設定変更時/AT終了時のモード移行。
   - confidence: ANALYSIS_HIGH

8. 一撃 — 機種解析
   - https://1geki.jp/slot/l_biohazard_vendetta/
   - 導入2023-07-24、ロデオ、設定別性能、ベース、AT純増、最大810G+α。
   - confidence: ANALYSIS_HIGH

9. パチスロメソッド — 朝一設定変更 / 電源OFF・ON比較
   - https://slotmethod.jp/archives/17221/
   - 設定変更で天井/状態RESET、電源OFF・ONで天井/状態引き継ぎ、設定変更後610G+α。
   - confidence: ANALYSIS_SINGLE

10. ALL7 — 2023年7月導入一覧
   - https://www.all7.jp/plans/index/2023/07
   - 2023-07-24のパチスロ導入予定として本機を確認。
   - confidence: INDUSTRY_LISTING

## conflicts
- 重大な性能値CONFLICTは今回確認せず。
- メーカー表記は解析DBで `Sammy` とされる資料がある一方、当時業界発表は **製造元ロデオ / 販売発表サミー**。混同せず `ロデオ製造 / サミー` をcanonical表記とする。

## missingFields
- 設定変更時のモードC/D/天国/超天国の個別振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有のリールガックン条件・発生率: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の内部モード・有利区間を独立明記した直接資料: UNVERIFIED_AFTER_RESEARCH

coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
