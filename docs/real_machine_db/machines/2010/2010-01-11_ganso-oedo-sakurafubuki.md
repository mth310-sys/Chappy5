# 元祖!大江戸桜吹雪

machineName: 元祖!大江戸桜吹雪
manufacturer: 平和
formalModelName: 元祖！大江戸桜吹雪Z
approvalNumber: 9S0827
releaseDate: 2010-01-11
generation: 5号機
systemType: A+ART / 30GセットART / 次回ボーナスまで継続する上位ART / 二段階天井
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL

## chronologyNote

- 最新main 441件 / chronologicalFrontier 2010-01-12「夢幻の如く」からHANDOFF指定の2010-01-13〜01-24境界候補を再監査。
- 月精度候補だった本機を当時資料へ掘り直した結果、グリーンべると（2009-12-14）が「納品は1月11日から」、HAZUSE DATAが「導入開始日 2010年1月11日」と明記していることを確認。
- chronologicalFrontierより1日早い遡及漏れなので、時系列漏れ防止を優先して442件目に補完する。chronologicalFrontier自体は2010-01-12のまま維持。
- 追加直前にmainのLATEST_HANDOFFを再取得しrecordCount 441のまま、想定ファイルパスも404で未登録を確認した。

## payoutRateBySetting

- 設定1: 96.5%
- 設定2: 98.4%
- 設定3: 101.1%
- 設定4: 103.8%
- 設定5: 107.3%
- 設定6: 110.2%

P-WORLDとpacnkで一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### BIG
- 設定1: 1/458.30（P-WORLD丸め1/458）
- 設定2: 1/442.80（同1/443）
- 設定3: 1/428.30（同1/428）
- 設定4: 1/414.80（同1/415）
- 設定5: 1/402.10（同1/402）
- 設定6: 1/385.50（同1/386）

### REG
- 設定1: 1/712.40（P-WORLD丸め1/712）
- 設定2: 1/697.20（同1/697）
- 設定3: 1/668.70（同1/669）
- 設定4: 1/642.50（同1/643）
- 設定5: 1/618.30（同1/618）
- 設定6: 1/595.80（同1/596）

### ボーナス合算（P-WORLD / HAZUSE）
- 設定1: 1/279
- 設定2: 1/271
- 設定3: 1/261
- 設定4: 1/252
- 設定5: 1/244
- 設定6: 1/234

confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**

`元祖!大江戸桜吹雪 / 元祖！大江戸桜吹雪Z / 9S0827 / 平和 / 50枚 / 1000円 / ベース / コイン持ち / ゲーム数` を組み替え、P-WORLD、HAZUSE、K-Navi、当時攻略記事、旧DB、回顧DBを再探索したが、比較可能な公表/解析値を確定できなかった。2010-01-15の個人実戦記に「1k=40以上はありそう」という体感記述はあるが、測定値ではないためDB値には採用しない。

confidence: UNVERIFIED

## netIncrease

ART「桜満開モード」: **約+1.3枚/G**

- 1セット **30G**。
- ART中もレア役・ボーナスでストック上乗せが行われる。
- 「超桜満開モード」は次回ボーナスまで継続し、REG成立時は継続抽選がある。

P-WORLD、グリーンべると、K-Naviで一致。

confidence: ANALYSIS_HIGH_CROSSCHECKED_WITH_INDUSTRY

## basicPayout

- BIG: **約252枚**（369枚超払い出しで終了）
- REG: **約48枚**（63枚超払い出しで終了）

P-WORLDと2009-12-14グリーンべるとで一致。

confidence: INDUSTRY_CROSSCHECKED

## modeSpecificMinimumData

- 通常時にはART当選期待度に関わる低確/高確系の状態が存在し、「好機モード」は高確期待の示唆・ART突入補助として機能する。
- 通常天井1: **ボーナス間1080G**で、次回ボーナス後のART突入が確定。
- 通常天井2: **通常時1460Gハマリ**で無限ARTへ突入し、次回ボーナスまで継続。
- P-WORLDは1460G、当時2010-01-15実戦記事には1500G表記があるため、正式DB値はP-WORLDの1460Gを主値とし、1500Gは当時俗称/丸め差として注記する。

confidence: ANALYSIS_HIGH_CROSSCHECKED

## resetBehavior — v0.7

settingChangeBehavior: **PARTIALLY_CONFIRMED**。pacnk本機専用解析は、設定変更後に「ボーナス間1080Gの天井高確はリセット」される一方、「通常時1460Gの無限ART天井はゲーム数を引き継ぐ」と明記。二つの天井カウンタが設定変更で同じ処理ではない点をそのまま保持する。

carryOverBehavior: **PARTIALLY_CONFIRMED**。据え置き時の全内部状態について直接本文は未回収。ただし当時2010-01-15実戦記事では「宵越し910G」を1460/1500G無限ART天井狙いとして実戦しており、少なくとも当時実戦上は宵越し対象として扱われていた。設定変更と据え置きの判別不能時を含むため、これだけで全状態保持とは断定しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ONのみの場合の1080G天井高確進捗、1460G無限ART進捗、低確/高確、ARTストックの保持/初期化を本機固有の直接資料で確定できず。

gameCounterReset: **MIXED_CONFIRMED**。
- ボーナス間1080G天井高確: 設定変更でリセット。
- 通常時1460G無限ART天井: 設定変更でもゲーム数引継ぎ。
- 据え置き/単純電断時の厳密処理は全項目について一括推定しない。

ceilingAfterReset: **NO_SHORTENING_CONFIRMED / MIXED_COUNTER_TREATMENT**。リセット専用の短縮天井値は確認できない。設定変更時は1080G側のみ進捗消去、1460G側は引継ぎという本機固有差を保持。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。低確/高確/好機モード等の設定変更時再抽選・初期振り分けを直接確定できない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。ARTストック、ART中、好機/高確などの設定変更・据え置き・電断時処理を確定できない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: **LIMITED_CONFIRMED**。設定変更でも1460G無限ART天井のゲーム数が引き継がれるため、その進捗は消えない。一方、設定変更専用の短縮天井・朝一高確優遇・当選率優遇は確認できない。

resetPenalties: **CONFIRMED_SINGLE_ANALYSIS_SOURCE**。設定変更するとボーナス間1080G側の天井高確進捗がリセットされる。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / リール / 初期出目 / 液晶 / 好機モード / ランプ / 設定変更判別` を追加して再探索したが、本機固有の変更/据え置き判別手段を確定できない。

numericResetData:
  normalCeilingA: ボーナス間1080G → 次回ボーナス後ART確定
  normalCeilingB: 通常時1460G → 無限ART、次回ボーナスまで
  settingChangeCeilingA: 1080G側進捗リセット（pacnk本機専用解析）
  settingChangeCeilingB: 1460G側ゲーム数引継ぎ（pacnk本機専用解析）
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_WITH_DIRECT_COUNTER_BEHAVIOR

## conflicts

- 1460G無限ART天井: P-WORLDは「通常時1460G」、2010-01-15当時実戦記事は「1500G」。P-WORLDの機種DB値を主値とし、当時記事の1500Gは丸め/俗称差として保持。
- 後年5号機クロニクルにはREG約104枚、ART 50G/+1.5枚等の本機と整合しない記述がある。P-WORLD・当時グリーンべると・K-NaviのREG約48枚、30G/+1.3枚と明確に競合し、別機種情報混入の可能性が高いため本機性能値には採用しない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- exact carryOverBehavior for all internal states: UNVERIFIED_AFTER_RESEARCH
- modeAfterReset: UNVERIFIED_AFTER_RESEARCH
- stateAfterReset: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric distributions/rates: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると / P-WORLD業界ニュース — https://news.p-world.co.jp/articles/3725/greenbelt — 2009-12-14発表、型式名、ART30G/+1.3枚、BIG約252枚、REG約48枚、設定1/6ボーナス端点、2010-01-11納品開始 — reliability: INDUSTRY
2. P-WORLD — https://www.p-world.co.jp/machine/database/5793 — 型式元祖！大江戸桜吹雪Z、検定番号9S0827、2010年1月、BIG/REG/合算/機械割、ART30G/+1.3枚、252/48枚、1080G/1460G天井 — reliability: INDUSTRY_DATABASE
3. HAZUSE DATA — https://data.hazuse.com/?machine_code=9S0827 — 導入開始日2010-01-11、設定別BIG/REG/合算 — reliability: CONTEMPORARY_ANALYSIS_DATABASE
4. pacnk — https://pacnk.com/slot/tools/sh_gansoooedosakura.html — 精密BIG/REG、機械割、設定変更時1080G側リセット・1460G側ゲーム数引継ぎ — reliability: ANALYSIS_SINGLE_DIRECT_RESET
5. K-Navi — https://p-kn.com/slot/1123/direct/ — ART30G、純増約+1.3枚/G、本機ページ現存 — reliability: CONTEMPORARY_ANALYSIS_DATABASE
6. 2-9伝説（2010-01-15当時実戦） — https://2-9densetsu.com/blog-entry-93.html/ — 宵越し910G狙い、1080G第一天井、1500G無限ARTという当時実戦認識、1k=40以上体感（ベース値には不採用） — reliability: CONTEMPORARY_USER_ANALYSIS_LOW_FOR_NUMERIC_CORE
7. 5号機クロニクル — https://5goki.com/heiwa-olympia — 月次存在確認のみ。REG/ART仕様に当時資料との明確な不整合があるため性能値には不採用 — reliability: RETROSPECTIVE_CONFLICT
