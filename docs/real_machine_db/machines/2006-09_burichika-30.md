# ブリチカ-30

machineName: ブリチカ-30
manufacturer: パイオニア
releaseDate: 2006-09
generation: 5号機初期
systemType: 30φノーマル + REG後RT
coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## payoutRateBySetting
1: 95.8%
2: 97.8%
3: 99.9%
4: 102.4%
5: 104.2%
6: 106.2%

reliability: ANALYSIS_HIGH

## initialHitBySetting
|設定|BIG|REG|
|---:|---:|---:|
|1|1/297.89|1/520.13|
|2|1/287.44|1/496.49|
|3|1/277.70|1/474.90|
|4|1/266.41|1/448.88|
|5|1/256.00|1/442.81|
|6|1/248.24|1/425.56|

reliability: ANALYSIS_HIGH

## baseGamesPer50
UNVERIFIED_AFTER_RESEARCH

`ブリチカ-30 / ブリチカ30 / パイオニア / 50枚 / 1000円 / ベース / コイン持ち` でパチマガスロマガ、HAZUSE、メーカー公式、当時記事・回顧資料を再探索したが、比較可能な50枚ゲーム数を確定できず。

## netIncrease
REG後32G RT「ブリチカチャンス」。メーカー公式・HAZUSE・当時業界記事でREG後必ず32G突入まで一致。比較可能な純増/Gは再探索後も未確定。

## basicPayout
BIG: 純増約260枚
REG: 純増約219枚

## modeSpecificMinimumData
- 30φ
- REG後必ず32G RT
- ボーナスと小役の同時抽選
- 完全告知
- 通常時ゲーム数天井として確認できる機能はなし。

## resetBehavior

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。本機固有の設定変更時処理を直接確認できる資料は未取得。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH。据え置き時にREG後32G RTの残G/内部RT状態がどう扱われるか直接確定できず。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの場合のRT残G/内部状態処理を直接確定できず。
gameCounterReset: NOT_APPLICABLE / NONE_CONFIRMED。通常時ゲーム数天井は確認されず、32GはREG後RTの固定継続ゲーム数。
ceilingAfterReset: NONE_CONFIRMED。リセット短縮天井・変更天井は確認されない。
modeAfterReset: NONE_CONFIRMED。朝一専用通常モードや設定変更時モード振り分けの公開情報は確認されない。
stateAfterReset: UNVERIFIED_AFTER_RESEARCH。ブリチカチャンス中の設定変更/据え置き/電断時RT状態処理を直接確定できず。
advantageousSectionReset: NOT_APPLICABLE。5号機初期で有利区間制度前。
resetBenefits: NONE_CONFIRMED。公開された朝一専用恩恵・設定変更専用優遇は確認されない。
resetPenalties: NONE_CONFIRMED。公開された設定変更専用不利要素は確認されない。
resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有のガックン、初期出目、告知ランプ等による設定変更判別を直接確定できず。
numericResetData: NONE_CONFIRMED。設定変更時だけ適用されるモード振り分け・短縮天井・朝一当選率等の公開数値は確認されない。

### resetBehavior QA note

`ブリチカ-30 / ブリチカ30 / パイオニア / ブリチカチャンス / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 初期出目 / RT / 32G` を組み替え、メーカー公式、パチマガスロマガ、HAZUSE、2006年当時業界記事、回顧資料まで再探索した。REG後32G RT自体は高信頼で確認できる一方、その残Gや内部RT状態の設定変更・据え置き・電断処理を本機固有資料で確定できなかった。一般的な5号機RT挙動は推測転記しない。

## sources
取得日: 2026-09-01

1. パイオニア公式 — https://www.slot-pioneer.co.jp/product/burichika/bc1.html — 5号機、30φ、REG後32G RT、同時抽選、完全告知 — reliability: OFFICIAL
2. パチマガスロマガ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/68/h.php — 設定別BIG/REG、メーカー発表機械割 — reliability: ANALYSIS_HIGH
3. パチマガスロマガ 機種トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/68/pioneer_slot_68.php — 攻め時・ヤメ時「特にナシ」、解析項目一覧 — reliability: ANALYSIS_HIGH
4. HAZUSE — https://hazuse.com/i/data/burichika/top.htm — 2006年9月、純増約260/219枚、機械割、REG後32G RT — reliability: ANALYSIS_SINGLE
5. Pマンズ / プレイグラフ当時記事 — https://p-mans.blogspot.com/2006/08/ — 2006-08-03発表展示会、沖スロ5号機初RT、RB後必ず32G — reliability: INDUSTRY_RETROSPECTIVE

## missingFields
- 50枚あたりゲーム数
- RT純増/G
- 設定変更/据え置き/電源OFF→ON時の本機固有処理
- ブリチカチャンス中の設定変更/電断時RT残G・状態処理
- 本機固有の設定変更判別挙動

## conflicts
なし（現時点）。
