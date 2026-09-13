# スマスロ 戦国BASARA GIGA

recordNo: 1581
machineName: スマスロ 戦国BASARA GIGA
manufacturer: エンターライズ
formalModel: L戦国BASARAギガZE
inspectionCode: 3S0064
releaseDate: 2023-08-07
generation: 6.5号機 / スマスロ
systemType: AT / CZ経由・差枚数管理AT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 98.1%
- 設定2: 99.6%
- 設定3: 102.0%
- 設定4: 105.0%
- 設定5: 107.0%
- 設定6: 110.0%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT初当たり
- 設定1: 1/529.6
- 設定2: 1/504.0
- 設定3: 1/443.4
- 設定4: 1/390.6
- 設定5: 1/363.6
- 設定6: 1/347.4

### CZ初当たり
- 設定1: 1/256.7
- 設定2: 1/249.8
- 設定3: 1/227.3
- 設定4: 1/205.2
- 設定5: 1/200.0
- 設定6: 1/197.2
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.5G/50枚（設定1目安）
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「BASARA FEVER」: 約3.1枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- ATは差枚数管理型で、初当たり時に上乗せ特化ゾーンから開始。
- 昼AT初当たり時「剣帝演舞」: 5G、毎ゲーム上乗せ、平均200枚以上。
- 夜AT初当たり時「魔王ノ一撃」: 1G完結、平均300枚以上。
- AT中は戦ゲージ等から「倍倍BATTLE」などの上乗せ特化ゾーンを目指す。
信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は歩数を加算し、規定歩数到達時にCZ/ATを抽選。
- モード別最大規定歩数: 通常A 999歩 / 通常B 800歩 / 通常C 549歩 / 天国 149歩 / 裏モード 999歩。
- 通常ゲーム数側にも699G+α天井があり、CZまたはATへ。
- AT間CZ6回スルー後は次回CZでAT当選＋夜チャレンジが確定する解析がある。
信頼度: ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は **有利区間 / 天井 / 内部状態 / 歩数 / モードをリセット**。
- 設定変更後のモードは **通常Cまたは天国のみ**。
- 最大規定歩数は通常最深999歩から **549歩以内**へ短縮。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は **有利区間 / 天井 / 内部状態 / 歩数 / モードを引き継ぐ**。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは、機種固有解析で **天井・内部状態を引き継ぐ**ことを直接確認。
- 純電断時の歩数・モード・有利区間そのものについて「電源OFF→ON」と独立明記した比較表を十分な再探索後も固定できなかったため、据え置き表から推測転記せず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH（天井・内部状態） / UNVERIFIED（純電断時歩数・モード・有利区間独立明記）

### gameCounterReset
- 設定変更: 天井進行・歩数をリセット。
- 据え置き: 天井進行・歩数を引き継ぐ。
- 純電源OFF→ON: 天井進行は引き継ぐ。歩数の独立明記は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常モード別最深: 通常A/裏 999歩、通常B 800歩、通常C 549歩、天国149歩。
- 設定変更時は通常C or 天国のみのため **最大549歩**。
- 通常最深999歩比で最大450歩短縮。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は通常C / 天国の2択。
- 公開振り分け:
  - 設定1: 通常C 50.0% / 天国 50.0%
  - 設定2: 通常C 48.4% / 天国 51.6%
  - 設定3: 通常C 46.9% / 天国 53.1%
  - 設定4: 通常C 44.5% / 天国 55.5%
  - 設定5: 通常C 42.2% / 天国 57.8%
  - 設定6: 通常C 39.8% / 天国 60.2%
- 据え置き: モード引き継ぎ。
- 純電源OFF→ON時モードの独立明記: `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 内部状態リセット。
- 据え置き: 内部状態引き継ぎ。
- 純電源OFF→ON: 内部状態引き継ぎ。
信頼度: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: 有利区間リセット。
- 据え置き: 有利区間引き継ぎ。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 純電源OFF→ON時の有利区間そのものの独立明記は `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH（設定変更・据え置き）

### resetBenefits
- 設定変更後は通常Cまたは天国濃厚となり、通常A/B/裏を回避。
- 最大規定歩数が999歩→549歩以内へ短縮。
- 天国選択時は149歩以内にCZまたはAT当選。
- 高設定ほど天国選択率が高く、設定1 50.0%から設定6 60.2%。

### resetPenalties
- 設定変更により前日の天井進行・内部状態・歩数・モード・有利区間を失う。
- 設定変更専用の追加不利数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 当時解析はリセット判別を「調査中」としている。
- 149歩以内当選は天国選択を示唆し設定変更推測材料になり得るが、通常遷移でも天国は存在するため単独確定要素ではない。
- 本機固有のリールガックン条件・発生率は `スマスロ戦国BASARA GIGA / L戦国BASARAギガZE / エンターライズ` と `ガックン / 設定変更 / リセット / 朝一 / 据え置き` を組み替えて再探索したが直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時通常C / 天国:
  - 設定1: 50.0% / 50.0%
  - 設定2: 48.4% / 51.6%
  - 設定3: 46.9% / 53.1%
  - 設定4: 44.5% / 55.5%
  - 設定5: 42.2% / 57.8%
  - 設定6: 39.8% / 60.2%
- 設定変更後最大規定歩数: **549歩**。
- 天国最大: **149歩**。

### publicMorningNumbers
- 設定変更後: **通常C or 天国100%**。
- 設定変更後最大規定歩数: **549歩**。
- 天国選択率: 設定1 50.0% → 設定6 60.2%。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `スマスロ 戦国BASARA GIGA / 戦国バサラギガ / L戦国BASARAギガZE / エンターライズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 歩数 / 天井短縮 / モード / モード振り分け / 内部状態 / ガックン / 有利区間` を組み替えて探索。
- エンターライズ公式、公安委員会検定通過業界記事、遊技日本/グリーンべると、P-WORLD、なな徹、一撃、ちょんぼりすた、パチ＆スロ必勝本等を横断。
- 本機固有ガックンと純電断時歩数/モード/有利区間の独立明記は十分な再探索後も固定できず、推測補完していない。

## sources
取得日: 2026-09-13

1. エンターライズ公式
   - https://www.enterrise.co.jp/
   - 2023-08-07に本機特設サイト更新を確認。実導入期の公式活動記録。
   - confidence: OFFICIAL

2. グリーンべると / P-WORLD — 発売・性能
   - https://news.p-world.co.jp/articles/24212/greenbelt
   - AT初当たりレンジ、出玉率、約32.5G/50枚、純増約3.1枚/G、剣帝演舞/魔王ノ一撃平均獲得。
   - confidence: INDUSTRY

3. グリーンべると — 8/7導入記事
   - https://web-greenbelt.jp/post-75158/
   - 2023-08-07ホール導入開始、AT構造・純増・基本上乗せ性能。
   - confidence: INDUSTRY

4. 遊技通信 / P-WORLD — 東京都公安委員会検定通過まとめ
   - https://news.p-world.co.jp/articles/24246/yugitsushin
   - 型式L戦国BASARAギガZE、エンターライズ、検定番号3S0064。
   - confidence: INDUSTRY

5. P-WORLD — 機種DB
   - https://www.p-world.co.jp/machine/database/9839
   - モード別規定歩数、剣帝演舞/魔王ノ一撃、通常時構造。
   - confidence: ANALYSIS_HIGH

6. なな徹 — 朝一/設定変更
   - https://nana-press.com/kaiseki/machine/580/16112/
   - 設定変更/据え置きの有利区間・天井・内部状態・歩数・モード、設定別リセットモード振り分け、有利区間ランプ。
   - confidence: ANALYSIS_HIGH

7. ちょんぼりすた — 機種概要/朝一
   - https://chonborista.com/slot/universal-slot/188511/
   - 設定変更/電源OFF→ON時の天井・内部状態、設定別リセットモード振り分け。
   - confidence: ANALYSIS_HIGH

8. パチ＆スロ必勝本 — 通常モード
   - https://p.hisshobon.jp/machine/4108/1/96999
   - 通常A/B/C/天国/裏の最大歩数と特徴。
   - confidence: ANALYSIS_HIGH

## missingFields
- 本機固有リールガックンの直接契約: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON時の歩数/モード/有利区間そのものの独立明記: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 導入時期: 2023-05-08のティザー/試打公開、過去スケジュール上の5/8・6/5系表記と、実ホール導入2023-08-07に差がある。本DBのreleaseDateは公式活動・実導入記事が一致する **2023-08-07** をcanonicalとし、過去候補日は事前予定/情報公開段階のCONFLICTとして保持する。

## status
- coreStatus: COMPLETE_CORE
- resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
