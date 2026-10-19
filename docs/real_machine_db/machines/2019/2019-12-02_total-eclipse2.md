# パチスロ トータル・イクリプス2

recordNo: 1320
machineName: パチスロ トータル・イクリプス2
machineNameVariants: トータル・イクリプス2 / トータルイクリプス2 / TE2 / Sトータル・イクリプス2R
manufacturer: SANKYO
formalModel: Sトータル・イクリプス2R
certificationNumber: 9S0862
releaseDate: 2019-12-02
generation: 6号機
systemType: AT / 疑似ボーナス+CZ+ST型AT

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 96.7% |
| 2 | 98.4% |
| 3 | 100.4% |
| 4 | 103.9% |
| 5 | 106.9% |
| 6 | 111.0% |

SANKYOプレス試打会を報じた当時業界記事は設定1=96.7%～設定6=111.0%を掲載。1geki、HAZUSE系機種DB、複数解析資料で全設定値を照合。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### 疑似ボーナス初当たり

| 設定 | ボーナス |
|---|---:|
| 1 | 1/331 |
| 2 | 1/325 |
| 3 | 1/302 |
| 4 | 1/271 |
| 5 | 1/246 |
| 6 | 1/118 |

### AT「サバイバルタイム」初当たり

| 設定 | AT |
|---|---:|
| 1 | 1/734 |
| 2 | 1/698 |
| 3 | 1/623 |
| 4 | 1/516 |
| 5 | 1/440 |
| 6 | 1/174 |

### CZ出現率

| 設定 | CZ |
|---|---:|
| 1 | 1/182 |
| 2 | 1/180 |
| 3 | 1/177 |
| 4 | 1/174 |
| 5 | 1/166 |
| 6 | 1/89 |

当時業界記事は設定1/6の両端、1geki・HAZUSE・複数解析は全設定を掲載。設定6のみ初当たり群が大幅に軽い設計。

信頼度: INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約50.8G/50枚**。
- 一部資料の「約51G/50枚」は丸め精度差として扱う。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- 疑似ボーナス / AT: **約2.7枚/G**。
- 当時SANKYOプレス試打会記事、SANKYOオンライン博物館、1geki、複数解析で一致。

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 通常時「出撃ボーナス」: **30G**、純増約2.7枚/G。消化中にATを抽選。
- 「クライマックスエピソード」: AT当選濃厚のプレミアム系疑似ボーナス。主要解析では30G構成。
- AT「サバイバルタイム」: **1セット最大30G**のST型。
- AT継続時の「シューティングチャンス」: **1セット10～50G**。
- 最大継続率は **約96.4%**。
- 実獲得枚数は状態・区間で変動するため、物差し用には公開されたゲーム数と純増をcanonicalとする。

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData

- 通常時は成立役に応じてポイントを獲得し、**999pt**到達時にCZ抽選。
- CZ「テイクオフチャレンジ」: 約15G、ボーナス期待度約50%。
- 上位CZ「覚醒チャンス」: 最大20G、AT期待度約80%。
- 天井: **有利区間移行後777G**で疑似ボーナス当選。
- 天井はAT確定ではなく疑似ボーナスが恩恵。
- AT初当たり時の約50%で「超一撃モード」移行とする当時業界記事あり。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_DISPLAY_VS_INTERNAL_POINT_DISTINCTION
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 設定変更時は **天井ゲーム数RESET**。
- **内部モード再抽選**とする当時朝一解析あり。
- **内部状態再抽選 / RESET**。
- 朝一の液晶ステージは解析資料で「リルフォート歓楽街」または別資料で「ユーコン基地」と表記差があるため、ステージ名を変更確定条件には採用しない。
- ポイント等の見た目表示は0から開始する。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE / 朝一ステージ名はCONFLICT

### carryOverBehavior

- 設定変更を行わない据え置きでは **天井ゲーム数を引き継ぐ**とする朝一解析。
- 内部状態・内部モードも引継ぎとする解析系統あり。
- **内部ポイントは引き継ぐ**。ただし朝一の画面上ポイント表示は0になるため、表示値と内部値を分離して扱う。
- 当時資料の一部は「電源OFF→ON（据え置き）」を同一欄で扱っており、設定を触らない据え置きと単純電断を独立試験した資料までは固定できない。

信頼度: ANALYSIS_HIGH / 独立条件分離はLIMITED

### powerCycleBehavior

- 純電源OFF→ONのみは当時朝一表で「据え置き」条件と同列に整理され、**天井・内部状態・内部モード・内部ポイントをCARRY_OVER**する扱い。
- ただし「設定を触らない無電断据え置き」と「純電源OFF→ON」を独立比較した一次資料は固定できず、同列資料に基づく契約であることを明記する。
- 見た目のポイント表示は0になる。

信頼度: ANALYSIS_HIGH_WITH_CONDITION_CONFLATION_CAVEAT

### gameCounterReset

- 設定変更: **RESET**。
- 据え置き / 純電断: **CARRY_OVER**。
- 天井は有利区間移行後 **777G**。
- 液晶上の見た目情報だけで内部天井進捗を断定しない。

### ceilingAfterReset

- 設定変更後も公開最深天井は **有利区間移行後777G**。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 天井恩恵は疑似ボーナスで、AT直撃確定ではない。

### modeAfterReset

- 設定変更: **再抽選**とする当時解析。
- 据え置き / 純電断: **引継ぎ**とする同系統解析。
- 設定変更専用の公開モード振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset

- 設定変更: **RESET / 再抽選**。
- 据え置き / 純電断: **引継ぎ**。
- 通常/高確/超高確等の具体的な朝一振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset

- 本機は6号機で天井を「有利区間移行後777G」として管理する。
- 設定変更時は天井がRESETされること、有利区間移行後を起点とすることから朝一は新たな有利区間進行となる扱い。
- ボーナス/AT終了後は有利区間ランプ消灯を確認して即ヤメとする当時攻略が存在。
- 一方、**朝一の有利区間ランプだけでは設定変更判別できない**とする資料があるため、ランプ単独を変更確定条件にしない。

信頼度: ANALYSIS_HIGH

### resetBenefits

- 設定変更専用の短縮天井、専用朝一モード優遇、専用CZ高確率など、比較可能な確定恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更で前日の天井進捗・内部ポイント等を失う側面があるため、据え置きの宵越し価値とは分ける。

### resetPenalties

- 設定変更により前日の **天井進捗 / 内部ポイント / 内部状態・モード**がリセットされるため、前日ハマリや高ポイントの宵越し狙いに対しては不利。
- それ以外の設定変更専用ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 朝一は **ポイント等の表示が0になるが、据え置き時は内部ポイントを引き継ぐ**。
- そのため、朝一の早い段階で999pt到達が発生した場合は据え置き示唆になり得る。
- ただし表示0そのものでは設定変更/据え置きを判別できない。
- **有利区間ランプによる朝一リセット判別は不可**とする解析。
- 本機固有のガックン発生率・確定条件は、機種名/型式名/メーカー名と「ガックン/リセット判別/設定変更」を変えて再探索したが固定できず `PUBLIC_RESET_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- 初期出目による確定判別も `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers

- 設定変更後天井: **有利区間移行後777G**（通常時と同じ公開最深値。専用短縮なし確認）。
- 据え置き時内部ポイント: **CARRY_OVER**、見た目表示は0。
- 設定変更専用モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一特定G以内当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- リセット恩恵発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- ガックン発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

2026-09-11に `トータル・イクリプス2 / トータルイクリプス2 / TE2 / Sトータル・イクリプス2R / 9S0862 / SANKYO` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ポイント / モード / 状態 / 有利区間 / 有利区間ランプ / ガックン / 変更判別` を組み合わせて再探索。メーカー公式博物館、当時業界記事、HAZUSE、1geki、当時攻略系を横断した。天井・内部状態/モード・ポイント表示/内部引継ぎは固定できた一方、設定変更専用のモード振り分け、朝一当選率、ガックン確定契約は公開値を固定できなかったため推測補完しない。

## sources

取得日: 2026-09-11

1. SANKYOオンライン博物館 — パチスロ トータル・イクリプス2
   - https://www.sankyo-fever.jp/collection/899/
   - 2019年12月、6号機AT、CZ期待度、ST型AT、最大継続率約96.4%等を確認
   - reliability: OFFICIAL
2. Amusement Japan / P-WORLD業界ニュース — 人気版権のパチンコとパチスロ同時発表
   - https://news.p-world.co.jp/articles/12101/amusement
   - 2019-10-28、純増約2.7枚/G、AT構成、設定1/6のボーナス・CZ・AT・出玉率両端を確認
   - reliability: INDUSTRY
3. 遊技通信 / P-WORLD業界ニュース — SANKYO「トータル・イクリプス」の試打会
   - https://news.p-world.co.jp/articles/12085/yugitsushin
   - 型式呼称Sトータル・イクリプス2、純増約2.7枚/G、AT構成を確認。導入予定12/9表記は後の実導入DB 12/2と差があるため予定情報としてのみ保持
   - reliability: INDUSTRY
4. HAZUSE — パチスロ トータル・イクリプス2
   - https://hazuse.com/machine/pachislot/9S0862/
   - 型式Sトータル・イクリプス2R、検定番号9S0862、導入開始2019-12-02、設定別CZ/ボーナス等を確認
   - reliability: ANALYSIS_HIGH
5. 1geki — パチスロ トータル・イクリプス2 機種概要/スペック
   - https://1geki.jp/slot/s_te2/
   - 2019-12-02、設定別ボーナス/AT/機械割、純増約2.7枚/G、AT構成を確認
   - reliability: ANALYSIS_HIGH
6. 1geki — ボーナス/AT初当り
   - https://1geki.jp/slot/s_te2/1/
   - 設定1～6のボーナス/AT初当たりを確認
   - reliability: ANALYSIS_HIGH
7. 1geki — AT概要
   - https://1geki.jp/slot/s_te2/81/
   - AT純増約2.7枚/G、ST「サバイバルタイム」1セット30G等を確認
   - reliability: ANALYSIS_HIGH
8. スロぱちクエスト — トータルイクリプス2 天井解析
   - https://www.slopachi-quest.com/article/muvluv-alternative-total-eclipse2-tennjou/
   - 50.8G/50枚、777G天井、設定変更時天井RESET/モード再抽選/状態再抽選、電源OFF/ON時引継ぎを確認
   - reliability: ANALYSIS_SINGLE
9. スロットセブン — トータル・イクリプス2 天井/朝一
   - https://slot-seven.com/totaleclipse2-tenzyou/
   - 777G天井、50.8G/50枚、設定変更/電断の天井・状態、ポイント表示0と据え置き内部ポイント引継ぎ、有利区間ランプで判別不可を確認
   - reliability: ANALYSIS_SINGLE
10. ぱちんこキュレーション — スロットトータルイクリプス2
   - https://pachinko-curation.com/4580/
   - 2019-12-02、型式試験情報、設定別CZ/ボーナス/AT/出玉率、50枚約51G、純増2.7枚/Gを照合
   - reliability: ANALYSIS_SINGLE

## missingFields

- 設定変更専用モード振り分けの公開数値
- 朝一特定G以内当選率などの公開朝一数値
- 本機固有ガックン発生率/確定条件
- 無電断据え置きと純電源OFF→ONを独立比較した一次契約

## conflicts

- 導入日はSANKYO公式が2019.12、HAZUSE/1geki/複数導入DBが2019-12-02で一致。一方、2019-10-25の遊技通信試打会記事は「12月9日から」と予定表記。後続の実導入資料を優先しcanonicalを2019-12-02、12/9は事前予定差として保持。
- 朝一ステージは攻略資料間で「リルフォート歓楽街」「ユーコン基地」の表記差があるため、変更判別項目には採用しない。
- ベース50.8G / 約51Gは丸め精度差でありCONFLICTではない。
- 導入台数は約5,000/6,000/8,000台の二次資料差があるが、現在の必須収集対象外のためcanonical化しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_DISPLAY_VS_INTERNAL_POINT_DISTINCTION
