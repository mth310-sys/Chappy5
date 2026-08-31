# アストロ球団

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: アストロ球団
manufacturer: JPS（ジェイピーエス） / 総発売元トレード
releaseDate: 2007-05-06納品開始予定（当時業界記事）
generation: 5号機初期
systemType: ボーナス + RT / AT的ナビ機能（アストロタイム）
formalModel: モエロアストロキュウダン2

## 性能コア

payoutRateBySetting:
- 5号機クロニクル掲載レンジ（通常〜攻略時等の定義差を含むレンジ表記として保持）
  - 設定1: 96.2〜98.9%
  - 設定2: 99.3〜102.5%
  - 設定3: 102.0〜105.7%
  - 設定4: 105.9〜109.7%
  - 設定5: 109.5〜113.6%
  - 設定6: 110.1〜112.6%

confidence: ANALYSIS_SINGLE

note:
- 単一値ではなくレンジで掲載されており、攻略条件差を含む可能性が高いため、通常市場値と完全攻略値を平均化・単一化しない。

initialHitBySetting:
- 赤7BIG
  - 設定1: 1/762.05
  - 設定2: 1/712.35
  - 設定3: 1/579.96
  - 設定4: 1/500.27
  - 設定5: 1/481.88
  - 設定6: 1/481.88
- 橙BIG
  - 設定1: 1/963.76
  - 設定2: 1/963.76
  - 設定3: 1/819.20
  - 設定4: 1/689.85
  - 設定5: 1/655.36
  - 設定6: 1/655.36
- BIG合成
  - 設定1: 1/425.56
  - 設定2: 1/409.60
  - 設定3: 1/339.56
  - 設定4: 1/289.98
  - 設定5: 1/277.69
  - 設定6: 1/277.69
- 赤7CT
  - 設定1: 1/2259.86
  - 設定2: 1/2259.86
  - 設定3: 1/1424.70
  - 設定4: 1/1820.44
  - 設定5: 1/1191.56
  - 設定6: 1/1191.56
- 橙CT
  - 設定1: 1/3855.06
  - 設定2: 1/3855.06
  - 設定3: 1/1927.53
  - 設定4: 1/2730.67
  - 設定5: 1/1524.09
  - 設定6: 1/1524.09
- CT合成
  - 設定1: 1/1424.70
  - 設定2: 1/1424.70
  - 設定3: 1/819.20
  - 設定4: 1/1092.27
  - 設定5: 1/668.73
  - 設定6: 1/668.73
- ボーナス合成
  - 設定1: 1/327.68
  - 設定2: 1/318.14
  - 設定3: 1/240.06
  - 設定4: 1/229.15
  - 設定5: 1/196.22
  - 設定6: 1/196.22

confidence: ANALYSIS_HIGH（パチマガスロマガ詳細値。設定1〜6合成レンジは当時業界一次資料の約1/327〜1/196と一致）

baseGamesPer50:
- UNVERIFIED
- 「アストロ球団 / モエロアストロキュウダン2 / JPS / 50枚 / 1000円 / ベース / コイン持ち / 回転数」等へ検索語を変え、当時業界記事、パチマガスロマガ、K-Navi、5号機DB、回顧資料を横断したが、比較可能な50枚あたりゲーム数を今回確定できず。

netIncrease:
- ノーマルRT: 約+1.0枚/G（K-Navi）
- アストロタイム: ノーマルRTのチェリー終了をナビ回避し、ボーナス成立まで延命するRT。グリーンべるとは「メダルを減らさずに継続」と記載。

confidence: ANALYSIS_HIGH / INDUSTRY

basicPayout:
- BIG: 規定払い出し300枚 / 純増約265枚（パチマガスロマガ）
- CT: 規定払い出し59枚 / 純増約52枚（パチマガスロマガ）
- 当時グリーンべるとは概数でBB約260枚、CT約50枚。

confidence: ANALYSIS_HIGH + INDUSTRY

modeSpecificMinimumData:
- 5号機 / 5ライン / 3枚掛け専用。
- 通常状態72G消化後およびBB/CT後に通常RTへ移行（当時グリーンべると）。
- 通常RT中の「アストロチャンス」で3択5枚役を正解すると「アストロタイム」へ。
- アストロタイム中は3種類のチェリーを完全ナビし、パンク役入賞を回避することでボーナス成立までRTを延命。
- K-Naviでは通常RTのリプレイ確率約1/1.3、純増約+1枚/G。
- パチマガスロマガはアストロタイムを「平均1000枚、最大一撃5000枚」の出玉性能として紹介。これは期待/上限的な紹介値であり基本獲得枚数には混ぜない。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 後年の実戦回顧で「設定変更で（RT側の枚数上限が）再セットされる」とする記述を確認したが、一次/高信頼解析資料で設定変更時の具体的なRT状態・差枚上限処理を照合できていないため、現時点ではANALYSIS_SINGLE参考情報として保持し断定しない。
- 本機固有の設定変更時内部状態を明記した一次/高信頼資料はUNVERIFIED。

carryOverBehavior:
- 後年の実戦回顧では「据え置きで状態が残っていればRT状態になる」旨の記述あり。ただし高信頼資料での照合未完のためANALYSIS_SINGLE参考情報。
- 通常RT/アストロタイム残存状態・内部差枚上限の据え置き時正式処理はUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみの場合のRT状態・内部差枚上限の扱いを明記した高信頼資料は確認できずUNVERIFIED。

gameCounterReset:
- 通常状態72G消化後に通常RTへ移る周期的仕様は確認。
- 設定変更/据え置き/電源OFF→ON時にこの72G進行がリセット/引継ぎされるかはUNVERIFIED。

ceilingAfterReset:
- 一般的なボーナス間ゲーム数天井ではなく、通常状態72G後に通常RTへ移る仕様。
- 設定変更後の短縮天井という形の公開数値はNONE_CONFIRMED。

modeAfterReset:
- 朝一専用モード・モード振り分けの公開根拠はNONE_CONFIRMED。

stateAfterReset:
- 通常RT/アストロタイムというRESET_SENSITIVE候補状態を持つ。
- 設定変更での正式な状態再抽選/初期化、据え置き/電断時引継ぎは高信頼資料未確定のためUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更後に明確な朝一恩恵が発生するとする高信頼資料はNONE_CONFIRMED。
- 後年回顧にはRT状態/差枚上限のリセット特性を示唆する記述があり、朝一挙動へ影響する可能性があるためQA継続対象。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- ガックン、表示、ランプ等による本機固有の設定変更判別はUNVERIFIED。

numericResetData:
- 通常状態→通常RT: 72G（通常ゲーム中の基本仕様。リセット短縮値ではない）
- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一当選率/恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると「JPS新機種、『瞬発力がないとは言わせない』」
   - https://web-greenbelt.jp/00004059/
   - 2007-03-26掲載。3/19発表会、型式名モエロアストロキュウダン2、通常状態72G後/ボーナス後の通常RT、アストロチャンス→アストロタイム、BB約260枚/CT約50枚、合算約1/327〜1/196、納品5/6開始予定を確認。
   - reliability: INDUSTRY

2. パチマガスロマガ「アストロ球団 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/09/a.php
   - 5号機/5ライン/3枚掛け、BIG300枚払い出し・純増約265枚、CT59枚払い出し・純増約52枚、アストロタイム概要を確認。
   - reliability: ANALYSIS_HIGH

3. パチマガスロマガ「アストロ球団 ボーナス確率・PAYOUT」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/09/h.php
   - 設定別赤7BIG/橙BIG/赤7CT/橙CT、BIG/CT/ボーナス合成確率を確認。PAYOUT欄は調査中のため機械割には使用しない。
   - reliability: ANALYSIS_HIGH

4. K-Navi「RTは延命できる! / アストロ球団」
   - https://p-kn.com/slot/662/4103/
   - ノーマルRT/アストロタイムの2種RT、通常RTリプレイ約1/1.3、約+1枚/G、チェリー回避によるRT延命を確認。
   - reliability: ANALYSIS_HIGH

5. 5号機クロニクル「JPS 5号機全機種一覧」
   - https://5goki.com/jps
   - 2007/5導入、設定別機械割レンジ96.2〜113.6%等を確認。
   - reliability: ANALYSIS_SINGLE

6. Pマンズ / プレイグラフ系当時記事「ジェイピーエスがリアル野球スロット発表」
   - https://p-mans.blogspot.com/2007/03/
   - 2007-03-19発表会の補助照合。
   - reliability: INDUSTRY

7. パチ7自由帳「思い出深いパチスロと自分のすきなやつ」
   - https://pachiseven.jp/columns/column_detail/12018
   - 実戦回顧として、RTの枚数上限、設定変更時再セット、据え置き時に状態が残る旨の記述。一次/高信頼解析ではないためresetBehaviorの参考情報に限定。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数 / ベース
- 機械割レンジの厳密な各条件（通常手順/攻略手順等）の一次定義
- 設定変更/据え置き/電源OFF→ON時の通常RT・アストロタイム・内部差枚上限の正式処理
- 72G周期進行の設定変更/据え置き/電断時処理
- 本機固有の変更判別

## conflicts

- BIG/CT純増はパチマガスロマガの約265/52枚とグリーンべるとの概数約260/50枚。丸め差の範囲として扱い、CONFLICTにはしない。
- 機械割は単一値ではなく設定ごとに幅があるため、定義不明のまま平均化せずレンジ保持。

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL
