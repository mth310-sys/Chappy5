# P清流物語4 ヌシを求めて4000匹

machineName: P清流物語4 ヌシを求めて4000匹
manufacturer: サンスリー（販売: 三洋販売）
formalModel: P清流物語4HLC
releaseDate: 2025-01-06
modelType: ライトミドル / LT搭載
gameType: 1種2種混合 / c時短 / ST型RUSH / ボーナス型LT
status: COMPLETE_CORE
retrievedAt: 2026-09-21
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## Core spec
- jackpotProbability:
  - 通常時大当り: 約1/199.8
  - 右打ち中: 約1/74.4（大当り約1/199.8とc時短約1/118.7の合算）
- initialPayout: 3R 約300個（払出）
- rushEntryRate:
  - 初当りから直接「清流チャンス」: 50%
  - チャンスタイム20回の引き戻し込みTOTAL: 約62%
- rushContinuationRate: 約70%（88回、解析上約69.6%）

## Lucky Trigger
- ltName: カウントアップCHANCE
- ltType: ボーナス型ラッキートリガー
- ltEntryRoute:
  1. 初当りから清流チャンスへ突入、またはチャンスタイム20回で引き戻して清流チャンスへ
  2. 清流チャンス中に大当り
  3. 右打ち中大当りの約63%でボーナス型LT「カウントアップCHANCE」が発動し、約2000個以上
- ltEntryRate:
  - 右打ち中大当り基準: 約63%
  - 通常初当り基準の総LT到達率: 直接公表値未確認のため推測しない
- ltContinuationRate: N/A（継続RUSH型LTではなく、1回の大当り出玉を増加させるボーナス型LT。LT消化後は清流チャンスへ復帰）
- timeShortening:
  - チャンスタイム: 20回
  - 清流チャンス: 88回
- ceilingOrSupport: 遊タイム非搭載
- cTimeOrSpecialSystems: c時短約1/118.7。右打ち中約1/74.4は大当り約1/199.8との合算。

## Payout / allocation
- totalPayoutDistribution:
  - 特図1: 3R 約300個 + 清流チャンス88回 50%
  - 特図1: 3R 約300個 + チャンスタイム20回 50%
  - 右打ち: 10R×4 約4000個 + 清流チャンス88回 約20%
  - 右打ち: 10R×2 約2000個 + 清流チャンス88回 約43%
  - 右打ち: 3R 約300個 + 清流チャンス88回 約37%
- ltPayoutStructure:
  - LT発動は右打ち中大当りの約63%（約20%+約43%）
  - 約2000個から約4000個へのカウントアップは約1/3
  - LT終了条件は当該大当りの全消化。終了後は清流チャンスへ戻る。
- payoutDefinition: 300/1000/2000/4000個は払出表記。2000個=10R約1000個×2、4000個=10R約1000個×4。

## Game flow
通常時 約1/199.8
↓ 初当り 3R約300個
50% → 清流チャンス88回
50% → チャンスタイム20回
　　　 ↓ 引き戻し約23.7%
　　　 清流チャンス88回
↓ 右打ち中 約1/74.4、RUSH継続約70%
右打ち大当り
├ 約37%: 約300個 → 清流チャンスへ復帰
└ 約63%: LT「カウントアップCHANCE」
　　　　 ├ 約43%: 約2000個
　　　　 └ 約20%: 約4000個
　　　　 ↓ 当該大当り消化でLT終了
　　　　 清流チャンス88回へ復帰

## QA / definition notes
- メーカー公式/プレスリリースでLT搭載を直接確認。型式名P清流物語4HLC、メーカーはサンスリー。
- 本機のLTは上位RUSHではなく「ボーナス型LT」。清流チャンス自体をLTと誤記しない。
- P-WORLDの一部モード説明には清流チャンスを「ラッキートリガー」と表現する箇所があるが、必勝本はLT正式名称を「カウントアップCHANCE」とし、発動契機を右打ち中大当り約63%、終了を全大当り消化後、終了後を清流チャンスと明示。メーカー/業界資料の「ボーナス型LT」と整合するため本レコードではこの定義を採用。
- 「RUSH突入50%」と「チャンスタイム引き戻し込みTOTAL約62%」を分離。
- 「RUSH継続約70%」とLT性能を混同しない。LTには継続率という概念を置かずN/A。
- 右打ち約1/74.4は大当りとc時短の合算値。c時短単体約1/118.7と分離。
- 通常初当りからLT発動までの総到達率は公表直接値を確認できないため独自計算しない。

missingFields: 通常初当り基準の総LT到達率（直接公表値未確認・推測禁止）
conflicts: none（P-WORLDの「清流チャンス=LT」表現は、ボーナス型LTの正式解説との定義差として注記）

## Sources
Retrieved 2026-09-21.
1. SANYO / SANTHREE 公式機種ページ — https://www.sanyobussan.co.jp/products/pk_seiryu4/
2. SANYO / SANTHREE 公式プレスリリース（2024-11-05） — https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20241105.pdf
3. 遊技通信 / P-WORLD業界ニュース（型式・基本仕様・ボーナス型LT） — https://news.p-world.co.jp/articles/29380
4. Amusement Japan（基本仕様・RUSH・出玉） — https://amusement-japan.co.jp/article/detail/10004614/
5. GreenBelt（発表・LT搭載・主要振り分け） — https://web-greenbelt.jp/post-89949/
6. パチ＆スロ必勝本 LT「カウントアップCHANCE」解説 — https://p.hisshobon.jp/machine/4431/1/106116
7. P-WORLD機種DB — https://www.p-world.co.jp/machine/database/10158
8. ななプレス（主要振り分け・ゲームフロー） — https://nana-press.com/kaiseki/machine/869/
