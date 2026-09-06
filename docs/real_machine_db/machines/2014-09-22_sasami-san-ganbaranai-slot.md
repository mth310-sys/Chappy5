# ささみさん＠がんばらないすろっと

machineName: ささみさん＠がんばらないすろっと
manufacturer: DAXEL
releaseDate: 2014-09-22
releaseDatePrecision: exact_hall_start
generation: 5号機
systemType: ART / 擬似ボーナス / 周期抽選 / CZ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS

## identity

- K-Naviでホール導入開始 **2014-09-22** を確認。
- パチマガスロマガは **DAXEL / 2014年9月** と掲載。
- 当時業界記事（PiDEA、2014-08-01）でDAXEL新機種として発表、純増約2.0枚/G・2種類の擬似ボーナス搭載を確認。
- 後年の実機資料では型式表記 **ささみさん＠がんばらないすろっとDA** を確認。ただし今回、検定番号の安全な固定には至らず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_PLUS_INDUSTRY

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.5% |
| 3 | 100.0% |
| 4 | 104.0% |
| 5 | 107.3% |
| 6 | 110.2% |

- 当時解析系の機種別まとめで確認。後年DBの設定1/6も97.1%/110.2%で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_LIMITED

## initialHitBySetting

### ボーナス合成

| 設定 | 合成 |
|---:|---:|
| 1 | 1/125.8 |
| 2 | 1/119.9 |
| 3 | 1/113.6 |
| 4 | 1/107.2 |
| 5 | 1/100.8 |
| 6 | 1/91.7 |

### 内訳（パチマガスロマガ）

| 設定 | すーぱーがんばる@ぼーなす | がんばる@ぼーなす | がんばる@ちゃんす |
|---:|---:|---:|---:|
| 1 | 1/1315.9 | 1/203.2 | 1/440.7 |
| 2 | 1/1428.5 | 1/196.8 | 1/390.8 |
| 3 | 1/1132.8 | 1/185.2 | 1/397.1 |
| 4 | 1/1229.0 | 1/178.2 | 1/344.2 |
| 5 | 1/937.8 | 1/162.4 | 1/371.3 |
| 6 | 1/975.4 | 1/154.2 | 1/294.6 |

- 合成はパチマガスロマガと当時解析系で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- `UNVERIFIED_AFTER_RESEARCH`。
- `50枚 / 1000円 / ベース / コイン持ち / 千円回転`、機種名表記揺れ、DAXEL、型式DAで公式・当時解析・後年DB・実戦資料を再探索。
- 初日ユーザー実戦に「1万円で約250G」の投稿引用が残るが、単発実戦値で比較可能なベース値ではないため採用しない。

## netIncrease

- ART純増 **約2.0枚/G**。
- DAXEL公式機種ページ、P-WORLD、パチマガスロマガ、当時業界記事で照合。
- confidence: OFFICIAL_PLUS_INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

- `がんばる@ぼーなす`: **1セット100G+α / 約204枚**。
- `がんばる@ちゃんす`: **1セット小役8回+α / 平均約80枚**、最大7セット継続。
- K-Navi、パチマガスロマガ、PiDEAで主要値を照合。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は **1〜333Gの周期抽選**。周期到達で前兆「お兄ちゃん監視しすてむ」/CZ「オカルトZONE」/擬似ボーナスを抽選。
- ゲーム数天井: **ボーナス間888Gでボーナス**。当時解析では天井到達時は次回天国が濃厚/確定扱い。
- 周期天井: **4周期到達でボーナス確定**。
- CZ天井: **CZ間333GでCZ確定**とする当時解析資料あり。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は通常時ゲーム数天井が通常最大888Gから **最大777Gへ短縮**される当時解析を複数系統で確認。
- 当時解析ではリセット時の天井振り分けに **555Gが1/8（12.5%）** 存在。
- モード移行について当時解析は「基本のモード移行率自体は冷遇」とするが、今回取得できた本文では設定変更時の完全なモード振り分け表を安全に復元できず、数値表は `UNVERIFIED_FOR_EXACT_FULL_TABLE`。
- 周期回数、CZ間カウンタ、ムリムリメーター、内部状態について設定変更時に何がリセット/再抽選されるかを直接示す完全対照表は今回固定できず、個別に `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 当時/後年の宵越し実戦で **前日420G + 当日280G付近から宵越し天井到達**の実例があり、据え置き時のボーナス間ゲーム数引継ぎを支持。
- 後年回顧でも「据え置き店でムリムリメーター狙い・ハマリ台狙い」の記述があるが、メーカー直接契約ではないため補助証拠扱い。
- 据え置き時のモード・周期回数・CZ間カウンタ・ムリムリメーターの完全保持契約は、安全な直接解析本文を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: PERIOD_OBSERVATIONAL_SUPPORT_FOR_GAME_COUNTER / UNVERIFIED_FOR_OTHER_STATE

### powerCycleBehavior

- 設定変更なしの単純な電源OFF→ONについて、ゲーム数天井・周期・モード・CZ間・ムリムリメーターの直接対照表を、公式/当時解析/古いDB/回顧資料で再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き実戦の引継ぎを、そのまま単純電断契約へ拡張しない。

### gameCounterReset

- 設定変更時: **RESET / SHORTENED_CEILING_TO_MAX_777G** を当時解析で支持。
- 据え置き時: **CARRYOVER_SUPPORTED_BY_PERIOD_OBSERVATION**。
- 単純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 通常最大 **888G → リセット後最大777G**。
- 設定変更時 **555G天井選択率 12.5%（1/8）**。
- 通常時にはゲーム数天井のほか4周期天井があるが、設定変更直後の周期天井進捗処理は `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_SHORTENED_CEILING

### modeAfterReset

- 当時解析に設定変更時専用のモード移行が存在し、「基本のモード移行率自体は冷遇」と明記。
- ただし今回の取得可能本文では設定変更時の全モード振り分け数値を安全に復元できず `UNVERIFIED_FOR_EXACT_FULL_TABLE`。
- 天国は100G以内当選がほぼ確定するモードとして解析されるが、設定変更直後の天国スタート率を推測しない。

### stateAfterReset

- 高確/周期状態/ムリムリメーター等の設定変更時処理について、直接対照表を今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- **最大天井777Gへの111G短縮**。
- **555G天井が12.5%で選択**される解析値。
- 当時解析・後年朝一一覧ではリセット狙い対象として扱われる。

### resetPenalties

- 当時解析では設定変更時の「基本のモード移行率自体は冷遇」とされる。
- 具体的な通常A/B/天国等の全振り分け数値を今回復元できていないため、定量的な不利幅は `UNVERIFIED_AFTER_RESEARCH`。

### resetDetection

- `ささみさん＠がんばらないすろっと / ささみさん / DAXEL / DA / 朝一 / 設定変更 / リセット / 据え置き / ガックン / リール / 周期 / ムリムリメーター` で再探索。
- 本機固有のガックン・初期出目・初期ステージだけで変更を確定できる解析契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 宵越し天井到達位置や前日ゲーム数との整合は据え置き推測材料になり得るが、事後判別に近いため「朝一確定判別」とは分離する。

### numericResetData

- リセット後最大天井: **777G**。
- 通常最大天井: **888G**。
- リセット時555G天井: **12.5%（1/8）**。
- 設定変更時の完全モード振り分け: `UNVERIFIED_FOR_EXACT_FULL_TABLE`。

### publicMorningNumbers

- 公開解析値として **555G天井12.5%、最大777G** を保存。
- 朝一特定G以内の実測当選率など、比較可能な大規模実戦数値は今回固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 再探索メモ

- 表記揺れ: `ささみさん＠がんばらないすろっと / ささみさん@がんばらないすろっと / ささみさん / ささみさん＠がんばらないすろっとDA`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 888G / 777G / 555G / 周期 / CZ天井 / モード / ムリムリメーター / ガックン / 50枚 / 1000円 / ベース / コイン持ち`。
- DAXEL公式、P-WORLD、K-Navi、パチマガスロマガ、PiDEA、当時解析ブログ、後年DB/回顧、当時実戦を横断。
- 後年DBの一部には本機を6号機と誤記するページがあるため、世代/有利区間情報には使用しない。

## conflicts

- 現時点で性能コアの重大な数値競合は固定せず。
- 後年DBに **「6号機」** とする明確な誤記が存在するが、2014年導入・P-WORLDの5号機表記・当時資料と矛盾するため採用しない。
- リセットの「モード冷遇」は定性情報のみ保存し、完全振り分け表を推定生成しない。

## missingFields

- 50枚あたりゲーム数/比較可能なベース: `UNVERIFIED_AFTER_RESEARCH`。
- 検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の完全モード振り分け: `UNVERIFIED_FOR_EXACT_FULL_TABLE`。
- 設定変更時の周期回数/CZ間/ムリムリメーター/内部状態の完全処理: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時のモード/周期/CZ間/ムリムリメーター完全保持契約: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更なし電源OFF→ONの各内部情報: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン等の直接変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: **2026-09-07**

1. DAXEL公式「ささみさん＠がんばらないすろっと」
   - https://www.daxel.co.jp/sasami/sp/about/
2. K-Navi — 2014-09-22導入 / システム / 約204枚・約80枚
   - https://p-kn.com/slot/2111/
3. P-WORLD — 5号機ART / 純増約2.0枚/G / 周期1〜333G / ボーナス仕様
   - https://www.p-world.co.jp/machine/database/7488
4. パチマガスロマガ — 概要/ボーナス確率/ARTフロー/朝イチ・設定変更項目
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/05/daxel_slot_05.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/05/h.php
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daxel_slot/05/l.php
5. PiDEA — 2014-08-01発表会記事 / 純増約2.0枚/G / 約204枚・80枚
   - https://www.pidea.jp/articles/%E3%83%80%E3%82%AF%E3%82%BB%E3%83%AB%E3%80%8C%E3%81%95%E3%81%95%E3%81%BF%E3%81%95%E3%82%93%E3%80%8D%E3%81%AB%E3%82%A2%E3%83%8B%E3%83%A1%E5%85%A812%E8%A9%B1%E5%AE%8C%E5%85%A8%E5%8F%8E%E9%8C%B2
6. すろぱちくえすと — 天井/スペック/設定変更時777G・555G 1/8
   - https://www.slopachi-quest.com/kisyubetsu/sasamisan/
   - https://www.slopachi-quest.com/article/sasamisan-mode-tenzyou/
   - https://www.slopachi-quest.com/article/sasamisan-mode/
7. 肉汁スロッター — 最大888G、設定変更時777Gの回顧整理
   - https://www.nikuziru.com/archives/960
8. ふりいのスロ日記 — 前日420G+当日280Gからの宵越し天井実戦例
   - https://freeslot.blog.fc2.com/blog-entry-266.html
9. パチ7自由帳 — 据え置き店でのムリムリメーター/ハマリ狙い回顧（補助証拠）
   - https://pachiseven.jp/columns/column_detail/22443
10. 愛品館 — 型式表記「ささみさん＠がんばらないすろっとDA」の実機資料
   - https://www.aihin.co.jp/new/news-1063951/
