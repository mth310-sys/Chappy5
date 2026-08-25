# Chappy5 Game Direction

Last updated: 2026-08-25 19:29 JST

## Product requirement

遊創舎の看板候補として、iPhoneのブラウザで短時間でも遊べ、繰り返し・攻略・成長・収集・発見によって長く続けられるゲームを目指す。面白さに関する現時点の判断は、人間プレイ未確認のため `SIMULATED` である。

## Initial concept comparison

開始時に複数案を比較した。並行した初期設計で名称・細部の異なる近縁案も生まれたため、Executiveが最新main上のPlayableを正として統合した。

### A. ECHO DRIFT — 信号潜航ローグライト（SELECTED / IMPLEMENTED）
毎手3つの信号ルートから進路を選び、Energy・回収量・共鳴・崩壊率を見ながら潜航する。任意タイミングで帰還でき、深く潜るほど価値も全損リスクも増える。

- 面白さの核: 3択のリスク/報酬判断 + 「続行か帰還か」のpush-your-luck
- 独自性候補: 信号系統を繋ぐ共鳴と、深度上昇による全損圧力を同じ短い選択ループに重ねる
- スマホ適性: 縦画面、片手、大きなタップ対象、短時間中断可能
- 繰り返し深さ: 手ごとのランダム提示、共鳴狙い、危険度管理、帰還判断
- 長期拡張: 開始プロトコル、空域ルール、遺物効果、発見記録、物語断片へ拡張可能
- 実現可能性: HIGH。vanilla HTML/CSS/JS + localStorageで即Playable化済み
- 最大リスク: 数字を見て毎回同じ選択をするだけになると急速に浅くなる

### B. AFTERGLOW ROUTE — 航路ノード型ローグライト（PARALLEL VARIANT / NOT IMPLEMENTED）
盤面上の最大3方向からノードを選び、POWER / SALVAGE / HAZARD等を踏みながら区間突破する案。

- 強み: 空間的な先読みとOVERDRIVEの温存/使用を作りやすい
- Executive判断: ECHO DRIFTとコア目的が近く、現時点で別ゲームとして二重開発しない。OVERDRIVEや空間先読みは、ECHO DRIFTの人間評価後に必要なら設計資産として再検討する。

### C. POCKET COLONY / POCKET FOUNDRY — 育成・生態/生産パズル
- 強み: 愛着・長期最適化・発見を自然に作れる
- リスク: 中核が代表的な面白さになるまで必要システム量が多く、24時間で仮説検証が遅い

### D. RELIC FORGE — 発見型クラフト探索
- 強み: 攻略知識の蓄積そのものを長期動機にできる
- リスク: 探索・素材性質・クラフト反応の複数コアを同時成立させる必要がある

### E. NIGHT COURIER / TINY FRONTIER — ルート計画・拠点戦略
- 強み: テーマ性と長期世界成長を作りやすい
- リスク: 初期コンテンツ負担または複数コア化が大きい

## Executive selection

**最初の製品仮説は ECHO DRIFT に一本化する。**

理由は、最新mainに既にPlayableが存在し、看板作品に必要な長期構造へ伸ばす余地を持ちながら、最短で人間にコア体験を評価してもらえるため。24時間試験では別企画を同時制作せず、まず「3ルート選択 + 続行/帰還」が本当に面白さの核になれるかを強化・検証する。

## Current first playable

1. 潜航開始時 Energy 10 / Threat 6%。
2. 毎手、静かな反響 / 深層パルス / 共鳴追跡の3ルートがランダム数値とSignal A/B/Cを伴って提示される。
3. 共鳴追跡は同Signal連続で回収量が伸びる。
4. 深度に応じてThreatが増加し、毎手崩壊判定がある。崩壊時はRun内回収を失う。
5. プレイヤーは回収物がある限り任意に帰還でき、深度ボーナス付きで恒久回収へ保存する。
6. 異常信号から発見記録が増え、累計回収・Run数・発見はlocalStorageへ保存される。

## First Executive balance intervention

`SIMULATED` Monte Carloで旧値を純粋戦略（常に同ルート）として比較したところ、静かな反響の期待回収が他2ルートを大きく上回り、選択固定化リスクが見つかった。

旧値の概算（20k runs / policy）:
- calm expected bank ≈ 8.4 / survival ≈ 44.6%
- deep ≈ 2.6 / ≈ 11.4%
- resonance ≈ 3.4 / ≈ 15.7%

調整後の概算（30k runs / policy）:
- calm ≈ 6.0 / ≈ 32.5%
- deep ≈ 8.0 / ≈ 28.7%
- resonance ≈ 6.8 / ≈ 29.8%

これは「同じ強さ」を証明するものでも、面白さ評価でもない。極端な固定最適解を弱めながら、calm=長く潜る、deep=短く高収益、resonance=連鎖狙いという性格差を残すための初期調整である。

## Human verification gate

AIで構造問題をさらに減らした後、人間には次の3点だけを確認してもらう。

1. 3つのルートは実際に迷うほど意味が違うか、それとも結局いつも同じものを押すか。
2. 回収して帰るか、もう1手潜るかに実際の緊張があるか。
3. 1Run終了後、すぐ次を試したい気持ちが生まれるか。

現時点では全て `UNKNOWN / HUMAN_VERIFICATION_NEEDED`。
