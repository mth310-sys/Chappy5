# SLOTとある科学の超電磁砲

recordNo: 1533
machineName: SLOTとある科学の超電磁砲
manufacturer: 藤商事
formalModel: Sとある科学の超電磁砲FB
inspectionCode: 2S0622
releaseDate: 2022-11-07
generation: 6.5号機 / コンプリート機能搭載
systemType: AT / CZ→チャンスAT→メインAT

## payoutRateBySetting
- 設定1: 97.5%
- 設定2: 98.5%
- 設定3: 100.4%
- 設定4: 104.6%
- 設定5: 108.4%
- 設定6: 111.5%

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### 真剣抽選（CZ）
- 設定1: 1/107.7
- 設定2: 1/107.1
- 設定3: 1/106.0
- 設定4: 1/105.5
- 設定5: 1/105.2
- 設定6: 1/103.4

### 超電磁砲CHANCE（チャンスAT）
- 設定1: 1/295.2
- 設定2: 1/280.0
- 設定3: 1/264.2
- 設定4: 1/238.1
- 設定5: 1/221.9
- 設定6: 1/213.7

### Eternal Party RUSH（メインAT）
- 設定1: 1/556.6
- 設定2: 1/537.2
- 設定3: 1/506.0
- 設定4: 1/416.7
- 設定5: 1/348.0
- 設定6: 1/325.6

- 参考: 一撃の「初当たり確率」総合値は設定1 1/258.2 → 設定6 1/197.1。定義が超電磁砲CHANCE単体と異なるため別項目として扱う。

信頼度: OFFICIAL / ANALYSIS_HIGH

## baseGamesPer50
- 約36G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- Eternal Party RUSH / 各BONUS: 約2.7枚/G。

信頼度: OFFICIAL / INDUSTRY_HIGH

## basicPayout
- CZ「真剣抽選（ガチジャッジ）」成功期待度: 約45%。
- 上位CZ「真剣抽選T」: 4G、4G以内にベル/リプレイで発展した場合の成功期待度80%over。4G以内の発展期待度は約65%。
- チャンスAT「超電磁砲CHANCE」: 約20G、RUSH成功期待度約40%。
- メインAT「Eternal Party RUSH」: 初回「超電磁砲ATTACK」4G+αから開始、平均上乗せ約30G。SUPERは平均約85G。
- RUSH中ボーナス当選率: 約1/5.9〜約1/6。
- ULTIMATE LOOP: エンディング後の条件達成時に引き戻し、成功期待度約70%。成功時の獲得期待値約1,400枚とする業界資料あり。

信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は「とあるポイント」1000pt到達などからCZ「真剣抽選」を目指す。
- 超電磁砲CHANCE間天井: 通常時700G+αで「超電磁砲CHANCE以上濃厚」のCZ当選。
- Eternal Party RUSH間天井: 1290G+αでメインAT当選。
- 朝一/設定変更後に天井短縮値は確認されず、設定変更は通常天井を0から再計算する扱い。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_GACKUN
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESET。
- 内部状態RESET。
- とあるポイントRESET。
- とあるパネルRESET。
- 朝一表示は御坂美琴ステージ、ポイント0pt、全ゲコ太パネル。
- 設定変更後1回目のCZは上位CZ「真剣抽選T」への昇格率が優遇される。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井進行CARRY_OVER。
- 内部状態CARRY_OVER。
- とあるポイント/とあるパネルの内部内容CARRY_OVER。
- ただし朝一表示上はポイント0pt、全ゲコ太パネル、御坂美琴ステージとなるため、内部引継ぎを画面から直接判別しにくい。

### powerCycleBehavior
- 純電源OFF→ONでは天井・有利区間・内部状態を引き継ぐとする解析が確認できる。
- とあるポイントは内部引継ぎだが表示は0pt。
- とあるパネルは内部内容を引き継ぐが表示は全ゲコ太パネル。
- 開始ステージは御坂美琴ステージ。
- よって見た目は設定変更時と非常に近いが、内部契約は設定変更と異なる。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電断: CARRY_OVER。
- 超電磁砲CHANCE間700G+α、Eternal Party RUSH間1290G+αの進行を設定変更では0から再計算する。

### ceilingAfterReset
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常と同じ基準として、超電磁砲CHANCE間最大700G+α、Eternal Party RUSH間最大1290G+α。
- 700G+α到達時は「超電磁砲CHANCE以上濃厚」のCZ、1290G+α到達時はメインAT濃厚。

### modeAfterReset
- 朝一専用の名称付きモード振り分け表は `PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更ではポイント/パネルを初期化し、朝一初回CZの「真剣抽選T」昇格率が優遇される。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: CARRY_OVER。
- 純電断: CARRY_OVER。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: 有利区間CARRY_OVER。
- 純電断: 有利区間CARRY_OVER。
- エンディング到達時は有利区間リセット契機として確認。

### resetBenefits
- 設定変更後1回目のCZ「真剣抽選」では、上位CZ「真剣抽選T」の出現率が約60%（全設定共通）まで上昇。
- 通常の「真剣抽選T」実質出現率は設定1〜6で18.0 / 20.0 / 22.0 / 26.0 / 28.0 / 35.0%だが、これらには朝一・AT終了後1回目の約60%抽選も含まれるため、通常時単独率とは混同しない。
- 「真剣抽選T」は通常CZより高性能で、4G以内に発展した場合は最低紫パネル以上となり成功期待度80%over。

### resetPenalties
- 設定変更により前日の天井進行、内部状態、とあるポイント、とあるパネルの蓄積を失う。
- 設定変更専用の追加ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一は設定変更/据え置きとも御坂美琴ステージ、ポイント0pt表示、全ゲコ太パネル表示で開始するため、液晶初期表示では判別不可。
- 据え置き/純電断では内部ポイント・パネル・天井進行が引き継がれるため、その後の挙動が補助材料になり得るが、単独確定材料にはしない。
- 本機固有リールガックン条件・発生率は `SLOTとある科学の超電磁砲 / Sとある科学の超電磁砲FB / 藤商事 / 設定変更 / 朝一 / ガックン / リール` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更後1回目の「真剣抽選T」出現率: 約60%（全設定共通）。
- AT終了後1回目のCZでも「真剣抽選T」約60%（全設定共通）。
- 通常を含む実質「真剣抽選T」出現率: 設定1 18.0 / 2 20.0 / 3 22.0 / 4 26.0 / 5 28.0 / 6 35.0%。
- 設定変更後専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers
- 朝一/設定変更後1回目CZの「真剣抽選T」出現率: 約60%（全設定共通）。
- 朝一天井は通常基準の超電磁砲CHANCE間700G+α / Eternal Party RUSH間1290G+α。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `SLOTとある科学の超電磁砲 / とある科学の超電磁砲 レールガン / Sとある科学の超電磁砲FB / 2S0622 / 藤商事` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / ポイント / パネル / 真剣抽選T / ガックン / 有利区間 / 判別` を組み替えて再探索。
- 藤商事公式、公安委員会検定再掲、遊技通信/遊技日本/グリーンべると、一撃、なな徹、パチスロ必勝本系、ちょんぼりすた等を横断。
- 2025年の「スマスロ とある科学の超電磁砲2」は別型式・別世代のため、同機の699G短縮天井やモード振り分けは本機へ転用しない。

## releaseDateAudit
- 2022-11-07導入は一撃、なな徹、グリーンべると等で一致。
- 11/7群を月間カレンダー/導入一覧で再監査し、スロット本線のcanonicalは `花火絶景 / SLOTとある科学の超電磁砲 / パチスロ鉄拳4アルティメットデビルVer. / ラストユートピア` の4機と判断。
- `パチスロ幼女戦記` は当初11/7予定から延期され、実導入2022-12-05のため11/7群へ含めない。

## sources
取得日: 2026-09-13

1. 藤商事 公式 — SLOT とある科学の超電磁砲
   - https://www.fujimarukun.co.jp/products/s_railgun/
   - 設定別真剣抽選/超電磁砲CHANCE/Eternal Party RUSH確率。
   - reliability: OFFICIAL
2. PiDEA X — 東京都公安委員会 新台検定通過状況（2022-09-20）
   - https://www.pidea.jp/articles/1663809222
   - 型式 `Sとある科学の超電磁砲FB`、検定番号 `2S0622`、藤商事。
   - reliability: PUBLIC_INDUSTRY_HIGH
3. 広島県公安委員会告示第58号
   - https://www.pref.hiroshima.lg.jp/soumu/kenpo-pdf/2022/t069/2022-t069-010.pdf
   - 検定番号2S0622 / 型式 / 申請者・製造業者藤商事を確認。
   - reliability: OFFICIAL_PUBLIC
4. P-WORLD / 遊技通信 — 6.5号機の最終兵器！「SLOTとある科学の超電磁砲」
   - https://news.p-world.co.jp/articles/21757/yugitsushin
   - 型式、6.5号機、純増2.7枚/G、チャンスAT約20G・成功期待度約40%、AT中ボーナス約1/6、ULTIMATE LOOP等。
   - reliability: INDUSTRY_HIGH
5. グリーンべると — エンディング後の一部でATループの大チャンス「ULTIMATE LOOP」搭載
   - https://web-greenbelt.jp/post-64462/
   - 2022-11-07導入、AT構造、平均上乗せ等。
   - reliability: INDUSTRY_HIGH
6. 一撃 — 機種概要/スペック
   - https://1geki.jp/slot/s_railgun/
   - 設定別総合初当たり、超電磁砲CHANCE、RUSH、出玉率、純増、AT構造。
   - reliability: ANALYSIS_HIGH
7. 一撃 — CZ天井・AT天井 / 設定変更・電源ON/OFF
   - https://1geki.jp/slot/s_railgun/3/
   - 700G+α / 1290G+α天井、朝一表示、電源OFF→ON時のポイント・パネル内部引継ぎ。
   - reliability: ANALYSIS_HIGH
8. 一撃 — 真剣抽選T
   - https://1geki.jp/slot/s_railgun/46/
   - 朝一/AT終了後1回目約60%、実質出現率18.0〜35.0%、性能。
   - reliability: ANALYSIS_HIGH
9. なな徹 — 朝一・設定変更時の挙動/有利区間
   - https://nana-press.com/kaiseki/machine/446/12372/
   - 設定変更/据え置きの有利区間・天井・内部状態・ポイント・パネル、液晶判別不可、初回CZ優遇。
   - reliability: ANALYSIS_HIGH
10. なな徹 — 設定示唆・判別要素
   - https://nana-press.com/kaiseki/machine/446/12375/
   - 朝一/AT終了後初回「真剣抽選T」約60%を含む実質出現率。
   - reliability: ANALYSIS_HIGH
11. パチスロ必勝本系
   - https://p.hisshobon.jp/vpage/2491/1
   - 50枚あたり約36G。
   - reliability: ANALYSIS_HIGH
12. イチカツ！ 2022年新台一覧
   - https://ichikatsu.com/newslot2022/
   - 11/7群の花火絶景/とある/鉄拳4UDV/ラストユートピアを再照合。
   - reliability: SECONDARY_AUDIT

## missingFields
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の名称付きモード完全振り分け: PUBLIC_FULL_DISTRIBUTION_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 重大な性能コア数値CONFLICTなし。
- 「設定変更時と電源ON/OFF時は同様の挙動」という表現は、画面初期表示が同様という意味であり、内部ポイント/パネル/天井・状態は設定変更でRESET、純電断ではCARRY_OVER。CONFLICTではなく表示と内部を分離して保存。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_GACKUN
confidence: HIGH
