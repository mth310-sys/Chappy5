# L戦国乙女4 戦乱に閃く炯眼の軍師

recordNo: 1586
machineName: L戦国乙女4 戦乱に閃く炯眼の軍師
manufacturer: オリンピアエステート製造 / 平和
formalModel: L戦国乙女4S3
inspectionCode: 3S0520
releaseDate: 2023-09-04
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス経由型ゲーム数上乗せAT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 98.2%
- 設定2: 99.0%
- 設定3: 101.2%
- 設定4: 105.2%
- 設定5: 110.2%
- 設定6: 113.0%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス+AT直撃 初当たり
- 設定1: 1/272.7（canonical）
- 設定2: 1/267.3
- 設定3: 1/255.3
- 設定4: 1/238.2
- 設定5: 1/223.2
- 設定6: 1/217.1

### AT「強カワRUSH」初当たり
- 設定1: 1/429.2
- 設定2: 1/417.8
- 設定3: 1/393.6
- 設定4: 1/361.3
- 設定5: 1/334.1
- 設定6: 1/319.2

### CZ「乙女アタック」
- 設定1: 1/467.6
- 設定2: 1/452.2
- 設定3: 1/434.7
- 設定4: 1/410.9
- 設定5: 1/394.9
- 設定6: 1/381.5
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約31.8G/50枚（設定1）
- 一部資料は約32G/50枚表記。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 戦国乙女BONUS / AT「強カワRUSH」: 約2.5枚/G
- 上位AT「真強カワRUSH」: 約5.0枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- 戦国乙女BONUS: 30～50G、純増約2.5枚/G。
- エピソードボーナス: 30G、AT突入濃厚。
- AT「強カワRUSH」: 初期50G、純増約2.5枚/G、ゲーム数上乗せ型。
- 上位AT「真強カワRUSH」: 純増約5.0枚/G。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は規定ゲーム数、巫女カウンター、レア役等からCZ/擬似ボーナスを目指し、ボーナス経由または直撃でATへ移行。
- 通常時モードは通常A / 通常B / 通常C / 特殊 / 天国A / 天国Bの6種。
- モード別最大天井: 通常A 799G+α / 通常B 649G+α / 通常C 349G+α / 特殊 799G+α / 天国A・B 99G+α。
- ボーナス6連続AT非当選後、7回目のボーナスはエピソードボーナス（AT確定）。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は **有利区間 / ゲーム数天井 / モード / 内部状態をリセット**。
- ボーナススルー回数天井は0固定ではなく **ランダムに再セット / 再抽選**。
- 「巫女カウンター」もランダムに再セットされる。
- 朝一開始ステージは甲斐ステージ。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は **有利区間 / ゲーム数天井 / ボーナススルー回数 / モード / 内部状態 / 巫女カウンター内部値を引き継ぐ**。
- 見た目上の開始ステージは設定変更時と同じ甲斐ステージのため、ステージ単独では判別できない。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは **ゲーム数天井 / 内部状態を引き継ぐ**ことを機種固有比較資料で確認。
- 複数後年整理資料では据え置き扱いとしてモード・スルー回数・巫女カウンター・有利区間も引き継ぐと整理されている。
- ただし、純電源OFF→ON単独についてモード / ボーナススルー回数 / 巫女カウンター / 有利区間を項目ごとに一次的に明記した高信頼当時資料を固定できなかったため、それらは `CARRY_OVER_SUPPORTED_BY_SECONDARY_CROSSCHECK` とし、設定変更との差分推定だけで断定しない。
信頼度: ANALYSIS_HIGH（天井・内部状態） / ANALYSIS_SINGLE_TO_MULTI_SECONDARY（その他）

### gameCounterReset
- 設定変更: ゲーム数天井進行をリセット。
- 据え置き: 引き継ぎ。
- 純電源OFF→ON: 引き継ぎ。
- ボーナススルー回数は設定変更時ランダム再セット、据え置き時引き継ぎ。

### ceilingAfterReset
- 通常時の最大ゲーム数天井は **799G+α**。
- 設定変更専用の固定G数短縮天井は確認されず、モード再抽選によって99G / 349G / 649G / 799G系の天井が選ばれ得る。
- 朝一特有の主要恩恵は固定G数短縮より、**ボーナススルー回数のランダム再セット**によって通常より少ない見かけスルー回数でエピソードボーナス天井へ到達し得る点。
信頼度: ANALYSIS_HIGH

### modeAfterReset
- 設定変更: モード再抽選。
- 据え置き: モード引き継ぎ。
- 設定変更専用のモード振り分け率は、機種名・型式名・メーカー名と `朝一 / リセット / 設定変更 / モード / 振り分け` を組み替えて再探索したが公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更以外の有利区間リセット時に発生する「超強カワループ + 天国A以上確定」の恩恵は、**設定変更時には適用されない**。
信頼度: ANALYSIS_HIGH

### stateAfterReset
- 設定変更: 内部状態リセット。
- 据え置き: 内部状態引き継ぎ。
- 純電源OFF→ON: 内部状態引き継ぎ。
- 設定変更後の具体的な内部状態振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き: 有利区間引き継ぎ。
- 通常稼働中はAT終了後の一部 / エンディング終了後にも有利区間リセット契機あり。
- **設定変更以外**の有利区間リセット後は「超強カワループ + 天国A以上」が確定するが、設定変更時はこの恩恵対象外。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- ボーナススルー回数天井がランダム再セットされ、朝一は見かけ上6スルー未満でも次回エピソードボーナス天井が発動し得る。
- 巫女カウンターもランダム再セットされるため、朝一早期にCZ抽選契機へ到達する可能性がある。
- モードも再抽選されるため浅い天井モード選択の可能性はあるが、設定変更専用振り分け率は未公開確認のため定量恩恵にはしない。

### resetPenalties
- 前日のゲーム数天井進行、ボーナススルー進行、モード、内部状態、巫女カウンター内部進行を失う。
- 設定変更時には、通常稼働中の有利区間リセット後に付く「超強カワループ + 天国A以上」恩恵は付かない。
- 設定変更専用の追加不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一ステージは設定変更・据え置きとも甲斐ステージで共通。
- 前日閉店時の巫女カウンター残ptを把握し、翌日の減算・0到達挙動と照合することで据え置き/変更の推測材料になるが、設定変更時もランダム再セットされるため確定判別不可。
- 本機固有のリールガックン条件 / 発生率は、`戦国乙女4 / L戦国乙女4S3 / オリンピアエステート / 平和` と `ガックン / リール / 設定変更 / 朝一` を組み替え再探索したが、高信頼の機種固有公開契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH（巫女カウンター判別） / UNVERIFIED（ガックン）

### numericResetData
- 通常最大ゲーム数天井: **799G+α**。
- モード別最大天井: **99 / 349 / 649 / 799G+α**。
- 通常ボーナススルー天井: **6スルー後の7回目**。
- 設定変更時ボーナススルー回数: **ランダム再セット**（具体振り分け `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`）。
- 設定変更時巫女カウンター: **ランダム再セット**（具体振り分け `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`）。
- 設定変更時モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 朝一固定短縮天井: **なし確認**。ゲーム数天井の最大値は799G+α。
- スルー天井: 設定変更時ランダム再セットのため、通常の「6スルー後7回目」より早く発動する場合あり。具体的再セット率は未公開確認。
- 巫女カウンター: ランダム再セット。具体pt振り分けは未公開確認。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `L戦国乙女4 戦乱に閃く炯眼の軍師 / 戦国乙女4 / L戦国乙女4S3 / オリンピアエステート / 平和` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / スルー天井 / モード / 巫女カウンター / ガックン / 有利区間` を組み替えて探索。
- 平和系発表、遊技通信、アミューズメントジャパン、遊技日本、P-WORLD、一撃、なな徹、HAZUSE、ちょんぼりすた、Altema、導入カレンダー/旧DBを横断。
- 設定変更時モード振り分け、スルー回数再セット振り分け、巫女カウンター再セット振り分け、機種固有ガックンは公開固定値を確認できず推測補完していない。

## sources
取得日: 2026-09-13

1. 遊技通信 / P-WORLD — 新機種発表
   - https://news.p-world.co.jp/articles/24505/yugitsushin
   - 型式L戦国乙女4S3、オリンピアエステート製、AT純増約2.5枚/G、9月4日導入予定。
   - confidence: INDUSTRY

2. アミューズメントジャパン / P-WORLD — 新機種発表
   - https://news.p-world.co.jp/articles/24516/amusement
   - オリンピアエステート製スマスロ、戦国乙女BONUS 30～50G・純増2.5枚/G、ゲームフロー。
   - confidence: INDUSTRY

3. 遊技日本 / P-WORLD — 販売発表
   - https://news.p-world.co.jp/articles/25037/nippon
   - 型式L戦国乙女4S3、設定別初当たり、AT初期50G、純増2.5枚/G、上位約5.0枚/G、9月4日導入。
   - confidence: INDUSTRY

4. 一撃 — 機種解析
   - https://1geki.jp/slot/l_otome_keigan/
   - 検定番号3S0520、設定別出玉率/AT初当たり、31.8G/50枚、純増2.5/5.0枚/G、最大799G。
   - confidence: ANALYSIS_HIGH

5. なな徹 — 解析TOP
   - https://nana-press.com/kaiseki/machine/597/
   - 設定別初当たり・AT・機械割、31.8G/50枚、天井、純増等。
   - confidence: ANALYSIS_HIGH

6. なな徹 — 朝一/設定変更
   - https://nana-press.com/kaiseki/machine/597/16397/
   - 設定変更/据え置きの有利区間、天井、スルー回数、モード、内部状態、巫女カウンター、開始ステージ、リセット判別。
   - confidence: ANALYSIS_HIGH

7. なな徹 — 有利区間
   - https://nana-press.com/kaiseki/machine/597/17469/
   - 有利区間リセット契機と、設定変更以外のリセット後「超強カワループ+天国A以上」。
   - confidence: ANALYSIS_HIGH

8. HAZUSE — 機種解析
   - https://hazuse.com/machine/pachislot/3S0520/
   - 型式/検定番号、モード別天井、CZ/AT等の解析値。
   - confidence: ANALYSIS_HIGH

9. Altema — 朝一リセット
   - https://altema.jp/pachimo/lotomereset
   - 設定変更/電源OFF→ONの天井・内部状態比較、スルー回数再抽選、巫女カウンターによる判別。
   - confidence: ANALYSIS_SINGLE

10. 一撃 — 2023年9月新台カレンダー
   - https://1geki.jp/newmachinecalender/202309/
   - 2023-09-04群のパチスロ5機種確認。
   - confidence: ANALYSIS_HIGH

11. K-Navi — 2023年9月導入カレンダー
   - https://p-kn.com/calendar/202309/
   - 9月4日導入として戦国乙女4、L009 RE:CYBORG、ファミスタ回胴版!!、回胴式遊技機グランベルム等を確認。傷物語は別カレンダー/稼働資料と照合。
   - confidence: ANALYSIS_HIGH

## missingFields
- 設定変更時モード振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時ボーナススルー回数再セット振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時巫女カウンター再セットpt振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 機種固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 純電断単独のモード/スルー回数/巫女カウンター/有利区間について一次的項目別明記: UNVERIFIED_AFTER_RESEARCH（後年複数資料は据え置き同等の引継ぎで整合）

## conflicts
- 初当たり設定1: なな徹・遊技日本・複数解析は **1/272.7**、一撃・HAZUSEは **1/272.2**。設定2～6は一致。平均化せず、1/272.7をcanonicalとして `CONFLICT_SETTING1_INITIAL_HIT_272_7_VS_272_2` を保持。
- 一部後年整理資料は設定変更時ボーナススルー天井を「クリア」と簡略表記するが、なな徹は **ランダム再セット**を明記。朝一挙動の再現上はランダム再セットをcanonicalとし、単純0クリア表記は `CONFLICT_SIMPLIFIED_RESET_DESCRIPTION` として保持。

coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
recordConfidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH_WITH_DOCUMENTED_CONFLICTS
