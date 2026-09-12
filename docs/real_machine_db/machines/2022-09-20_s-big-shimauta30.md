# S BIG島唄30

recordNo: 1521
machineName: S BIG島唄30
manufacturer: オリンピアエステート（平和販売）
formalModel: SBIG島唄E2-30
inspectionCode: 2S0592
releaseDate: 2022-09-20
generation: 6.5号機 / 30Φ / コンプリート機能搭載
systemType: AT / 擬似ボーナス連チャンタイプ

## payoutRateBySetting
- 設定L: 公開値未確認
- 設定1: 97.5%
- 設定2: 98.4%
- 設定3: 100.2%
- 設定5: 104.3%
- 設定6: 108.2%

HAZUSE、1geki、なな徹、当時業界記事で主系列一致。
設定Lは搭載され、常時下パネル消灯が判別材料だが、機械割の公開確定値は確認できないため推測しない。

信頼度: INDUSTRY / ANALYSIS_HIGH

## initialHitBySetting
### ボーナス初当り
- 設定L: UNVERIFIED
- 設定1: 1/318.5
- 設定2: 1/306.9
- 設定3: 1/286.5
- 設定5: 1/250.8
- 設定6: 1/222.7

遊技日本、1geki、なな徹、アタリ7等で一致。

信頼度: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約32.9G/50枚（解析値）。
- 当時資料・攻略資料では約33G/50枚表記が中心で、32.9Gは精密値として扱う。

信頼度: ANALYSIS_HIGH

## netIncrease
- 約3.0枚/G（擬似ボーナスAT）。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BIG CHANCE: 67G、平均約200枚。
- シーサーBIG CHANCE: 100G、平均約300枚。
- REGULAR非搭載、当選はBIG系のみ。
- 連チャンモードの代表ループ率: 天国70% / DonDon80% / 超DonDon91%。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 6.5号機30ΦAT。擬似ボーナス連チャンで出玉を増やす。
- 通常時はボーナス初当り抽選と1G連ストック抽選を並行。
- 通常系モードは通常A / 通常B / 天国準備A / 天国準備B / SPストック / 引き戻し / チャンス等。
- 通常A・通常B・天国準備AのG数天井は800G。
- チャンス / 引き戻しは200G、天国準備Bおよび連チャンモードは32G、SPストックは810G。
- 800Gを超えてSPストック滞在となった場合、800〜809Gは高確率で1G連ストック抽選。
- 通常時のスイカ成立回数にも天井があり、原則最大10回で白BIG＋シーサーBIGモード濃厚。SPストック滞在時はこのスイカ10回天井の例外。
- 有利区間リセット契機は設定変更時、および連チャンモード中を除くボーナス終了後の一部。
- 有利区間ランプ非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間、G数天井、内部モードをリセットし、内部モードを再抽選。
- 朝一液晶/ゲーム数表示は0Gスタート。
- 設定変更時のみ選択される可能性がある「チャンスモード」を含む専用振り分けが公開されている。
- チャンスモードは天井200Gで、通常より早い初当りを狙える主要な朝一恩恵。

### carryOverBehavior
- 据え置き時は前日の内部G数/天井進行と内部モードを引き継ぐ扱い。
- 宵越しで前日最終G数＋当日G数が800G付近で当選した場合は据え置き推測材料になる。
- スイカ回数も前日値を把握していれば宵越し判別材料になる旨の解析があるが、設定変更時/純電断時のスイカ回数カウンタ処理を表形式で直接明示する一次的解析までは固定できないため、低レイヤ契約は `UNVERIFIED_AFTER_RESEARCH` とする。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間を引き継ぐ。
- G数天井を引き継ぐ。
- 内部モードを引き継ぐ。
- 表示ゲーム数は0Gスタート。
- パチマガスロマガ、HAZUSE、ちょんぼりすた系で一致。

### gameCounterReset
- 設定変更: 内部天井G数はRESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。ただし表示G数は0Gへ戻るため、見た目表示と内部進行を分離して扱う。

### ceilingAfterReset
- 設定変更後の固定短縮天井ではなく、設定変更専用モード振り分けにより30.0%でチャンスモード（天井200G）が選択される。
- 通常A / 通常B / 天国準備Aを選んだ場合の天井は800G、天国準備Bは32G。
- したがって「リセット後一律200G天井」ではない。

### modeAfterReset
設定変更時のモード振り分け（全設定共通）:
- 通常A: 9.8%
- 通常B: 9.8%
- チャンス: 30.0%
- 天国準備A: 50.0%
- 天国準備B: 0.4%

合計100.0%。HAZUSE、ちょんぼりすた、イチカツ等で一致。
- 天国準備Aは次回連チャンモード確定系のため、設定変更後はチャンス30%だけでなく天国準備A50%も朝一以降の連チャン期待に影響する。
- 設定変更以外の有利区間リセット時は通常B25.0% / 天国準備A25.0% / 天国準備B50.0%であり、設定変更時の振り分けとは別契約なので混同しない。

### stateAfterReset
- 朝一の主要内部状態は上記モード再抽選で表現できる。
- モード以外の個別高確/前兆状態について、設定変更専用の追加公開振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- スイカ回数カウンタ、通常時保持1G連ストック等の個別低レイヤ状態が設定変更/据え置き/純電断でどう処理されるかを網羅した直接表は確認できず、一般則からの推測補完はしない。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間ランプは非搭載のため、朝一ランプ状態からの変更判別は不可。

### resetBenefits
- 設定変更時30.0%でチャンスモード（200G天井）。
- 設定変更時50.0%で天国準備A。
- 設定変更時0.4%で天国準備B（32G天井）。
- 上記により設定変更後は通常時よりモード面で優遇される。

### resetPenalties
- 設定変更時に据え置き天井進行・前日モードを消去するため、前日ハマリを宵越し狙いしていた客には不利となる。
- 設定変更専用の抽選冷遇や固定ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のため、ランプによる変更判別は不可。
- 前日最終G数を把握し、宵越し合算約800Gでボーナス当選した場合は据え置きの可能性が高い。
- 宵越し合算800Gを明確に超えた場合は設定変更濃厚材料。ただし当該Gでの自力当選やホール対策があり「確定」とはしない。
- スイカ回数を把握できる場合も宵越し挙動が補助材料となり得る。
- 設定Lは常時下パネル消灯だが、これは設定L判別であり設定変更/据え置き判別ではない。
- 本機固有のガックン条件/発生率は、機種名・型式・検定番号・メーカー・「設定変更/リセット/朝一/ガックン/リール始動」を組み替えて再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時モード振り分け: 通常A 9.8% / 通常B 9.8% / チャンス 30.0% / 天国準備A 50.0% / 天国準備B 0.4%。
- チャンスモード天井: 200G。
- 天国準備B天井: 32G。
- 通常A / 通常B / 天国準備A天井: 800G。
- SPストック天井: 810G。

### publicMorningNumbers
- 設定変更時チャンスモード: 30.0%。
- 設定変更時天国準備A: 50.0%。
- 設定変更時天国準備B: 0.4%。
- 設定変更後200G以内の実当選率そのものは、モード振り分けと自力抽選が混在するため公開固定値を確認できず `UNVERIFIED_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- 検索語: `S BIG島唄30 / BIG島唄30 / BIG島唄-30 / SBIG島唄E2-30 / 2S0592 / オリンピアエステート / 平和 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / モード / モード移行 / スイカ回数 / ガックン / 有利区間 / 宵越し`。
- 遊技日本/P-WORLD、Greenbelt、HAZUSE、パチマガスロマガ、1geki、なな徹、ちょんぼりすた、イチカツ、当時攻略資料を横断。
- 設定変更/電源OFF→ONの有利区間・天井・内部モード契約と設定変更時モード振り分けは複数資料で一致。
- 本機固有ガックンとスイカ回数/保持ストック等の低レイヤ完全契約は十分な再探索後も固定できないためUNVERIFIEDのままとした。

## conflicts
- 導入日は、遊技日本・HAZUSE・1geki・複数解析が2022-09-20。一方Greenbelt事前記事は2022-09-19予定、ちょんぼりすたは「2022-10-03（一部先行9/20）」とする。全国一斉/段階導入の表現差があるため平均化せず、DB本線はhandoffの同日群および複数資料一致の2022-09-20をcanonicalとし、地域/本格導入差をCONFLICTメモとして保持。
- baseGamesPer50は約32.9Gと約33Gの表記差があるが、丸め差として32.9Gを精密値採用。
- HAZUSE初打講座の一部本文に通常BIGを100G/300枚とする表示崩れがあるが、業界一次資料・同サイト配当表・複数解析は通常BIG=67G/約200枚、シーサーBIG=100G/約300枚で一致するため、前者はページ表示/転記不整合として採用しない。

## missingFields
- 設定Lの確定機械割・初当り確率
- 本機固有のガックン条件/発生率
- 設定変更/据え置き/純電断時のスイカ回数カウンタ・保持1G連ストック等、低レイヤ内部状態の網羅的直接契約
- 設定変更後200G以内の実初当り率（モード選択率とは別定義）

## sources
取得日: 2026-09-13

1. 遊技日本 / P-WORLD — 新台発表
   - https://news.p-world.co.jp/articles/21358/nippon
   - 製造元オリンピアエステート、型式SBIG島唄E2-30、6.5号機30Φ、純増約3.0枚/G、初当り1/318.5〜1/222.7、出玉率97.5〜108.2%、BIG67G/約200枚、シーサーBIG100G/約300枚、9/20導入予定を確認。
   - reliability: INDUSTRY
2. Greenbelt — SBIG島唄30発表
   - https://web-greenbelt.jp/post-62001/
   - 6.5号機初30Φ、擬似ボーナス連チャン、BIG約200枚/シーサーBIG約300枚、AT初当り、9/19予定を確認。
   - reliability: INDUSTRY
3. HAZUSE — 基本スペック/天井・設定変更
   - https://hazuse.com/machine/pachislot/2S0592/
   - https://hazuse.com/machine/pachislot/2S0592/genre/207/
   - 型式SBIG島唄E2-30、検定番号2S0592、機械割、天井、設定変更/電源OFF→ON契約、設定変更時モード振り分け、有利区間ランプ非搭載、宵越し判別を確認。
   - reliability: ANALYSIS_HIGH / INDUSTRY_DB
4. パチマガスロマガ — 朝イチ・設定変更
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympiaestate_slot/01/kr01-1.php
   - 設定変更: 有利区間RESET/天井RESET/内部モード再抽選、電源OFF→ON: 各引継ぎ、表示0G、チャンスモード存在を確認。
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — 内部モード
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympiaestate_slot/01/tj07-1.php
   - モード別天井、設定変更時のみチャンスモード移行可能性を確認。
   - reliability: ANALYSIS_HIGH
6. 1geki — 機種概要/天井・設定変更
   - https://1geki.jp/slot/s_big_shimauta30/
   - https://1geki.jp/slot/s_big_shimauta30/3/
   - 初当り/出玉率、導入日、純増、天井、設定変更時モード、有利区間ランプ非搭載を確認。
   - reliability: ANALYSIS_HIGH
7. なな徹 — ボーナス確率/機械割/50枚ベース
   - https://nana-press.com/kaiseki/machine/430/10635/
   - 初当り、機械割、設定L下パネル消灯、約32.9G/50枚を確認。
   - reliability: ANALYSIS_HIGH
8. なな徹 — 朝一・設定変更
   - https://nana-press.com/kaiseki/machine/430/11746/
   - 設定変更時チャンスモード可能性、宵越しG数/スイカ回数による変更推測を確認。
   - reliability: ANALYSIS_HIGH
9. ちょんぼりすた — BIG島唄30解析
   - https://chonborista.com/slot/orinpia-slot/171917/comment-page-7/
   - 設定変更/電源OFF→ON契約、設定変更時モード振り分け、段階導入表記を確認。
   - reliability: ANALYSIS_HIGH
10. イチカツ — BIG島唄30
   - https://ichikatsu.com/bigshimauta30/
   - 天井、33G/50枚、設定変更時モード振り分け、リセット狙いの補助情報を確認。
   - reliability: ANALYSIS_SINGLE

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE
confidence: INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET
