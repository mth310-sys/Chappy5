# P【超甘LT】この素晴らしい世界に祝福を！ 最終クエスト1/49

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: P【超甘LT】この素晴らしい世界に祝福を！ 最終クエスト1/49
manufacturer: 豊丸産業
modelName: Pこの素晴らしい世界に祝福を！AX2
releaseDate: 2025-12-08
modelType: 甘デジ / 超甘LT / P機

gameType: 1種2種混合 / 初回突破ST → 通常RUSH → LTループ

jackpotProbability:
- 通常時: 1/49.9
- 右打ち中: 1/25.1

initialPayout:
- 初当り: 4R 約200個（払い出し）→ このすばチャレンジ100%

rushEntryRate:
- このすばチャレンジ突入率: 100%
- このすばチャレンジ: ST6回＋残保留4個、突破率約33%（残保留引き戻し込み）
- チャレンジ中大当りの90%で通常RUSH「このすばRUSH」、10%でLT「祝福RUSH」。

rushContinuationRate:
- このすばRUSH: 約78%（残保留引き戻し込み）
- ST33回＋残保留4個。

ltName: 祝福RUSH

ltEntryRoute:
- 初当り → このすばチャレンジ6回＋残4 → 大当り時10%の7Rで祝福RUSHへ直行。
- このすばチャレンジ大当り90%の4R → このすばRUSH → RUSH中大当り1%の7Rで祝福RUSH。
- このすばRUSHの最終変動または残保留での大当りは、このすばチャレンジ中と同じ10%がLT側との解析あり。
- 祝福RUSHの3%非継続時は通常へ落ちず、このすばRUSHへ戻り再度LTを狙える。

ltEntryRate:
- 初当りからのLT突入率: 約4.7%（約1/1057）との直接解析値あり。
- このすばチャレンジ中大当り時: LT 10%。
- このすばRUSH中大当り時: 基本LT 1%。最終変動/残保留当選時は10%。

ltContinuationRate:
- 祝福RUSH: 約97%
- 実質次回大当りまで。
- 大当り時97%で祝福RUSH継続、3%でこのすばRUSHへ移行。

ltPayoutStructure:
- 祝福RUSH中: 7R 490個＋祝福RUSH 10% / 4R 200or220個＋祝福RUSH 87% / 4R 220個＋このすばRUSH 3%。
- LT非継続3%でも通常終了ではなく下位RUSHへ戻る。

totalPayoutDistribution:
- 特図1: 4R 約200個＋このすばチャレンジ 100%。
- このすばチャレンジ中: 7R 490個＋祝福RUSH 10% / 4R 200or220個＋このすばRUSH 90%。
- このすばRUSH中: 7R 490個＋祝福RUSH 1% / 7R 490個＋このすばRUSH 9% / 4R 200or220個＋このすばRUSH 90%。最終変動/残保留当選時はチャレンジ中振り分けを適用。
- 祝福RUSH中: 7R 490個＋LT 10% / 4R 200or220個＋LT 87% / 4R 220個＋このすばRUSH 3%。

timeShortening:
- このすばチャレンジ: ST6回＋残保留4個。
- このすばRUSH: ST33回＋残保留4個。
- 祝福RUSH: 実質次回まで。

cTimeOrSpecialSystems:
- 「超甘LT」シリーズ第3弾として豊丸産業が展開。
- このすばRUSH最終変動/残保留ではLT振り分けが通常RUSH中1%ではなく10%になるため分離して扱う。

ceilingOrSupport:
- 遊タイム: 非搭載。
- コンプリート機能: 搭載。

gameFlow: |
  通常時 1/49.9
   ↓ 初当り 4R 約200個
  このすばチャレンジ ST6回＋残4（100%突入 / 突破約33%）
   ↓ 大当り
   ├─ 10% → 7R 490個 → LT「祝福RUSH」実質次回 / 約97%
   └─ 90% → 4R 200or220個 → このすばRUSH ST33回＋残4 / 約78%
                                  ↓ 大当り
                                  ├─ 基本1% → 7R → 祝福RUSH
                                  └─ その他 → このすばRUSH継続
  祝福RUSH
   ├─ 97% → 祝福RUSH継続
   └─ 3% → このすばRUSHへ降格（通常終了ではない）

notes:
- 型式 `Pこの素晴らしい世界に祝福を！AX2`。2024年199LT版、129緊急クエスト等の兄弟機と分離。
- 業界記事が豊丸産業「超甘LT」第3弾、2025-12-08導入、LT継続約97%を明示。
- 初当りからのLT突入率約4.7%（約1/1057）は一撃の直接値を採用し、経路確率から独自算出していない。
- P-WORLD本文に「ST50回」とする一箇所の記述があるが、同ページ基本スペック/大当り割合および他複数資料はこのすばRUSH33回＋残4で一致。33回を採用し、孤立本文誤記として扱う。

sources:
- https://news.p-world.co.jp/articles/32291 — グリーンべると業界記事。豊丸産業、超甘LT第3弾、導入日、1/49.9、約33%/78%/97%。取得日 2026-09-23。
- https://hazuse.com/hd/4p1505/ — HAZUSE。型式AX2、LT搭載、導入日。取得日 2026-09-23。
- https://www.p-world.co.jp/machine/database/10377 — P-WORLD。通常/右確率、ST回数、残保留、各RUSH、主要振り分け。取得日 2026-09-23。
- https://1geki.jp/pachinko/p_konosuba49lt/ — 一撃。型式、LT、確率/継続率。取得日 2026-09-23。
- https://1geki.jp/pachinko/p_konosuba49lt/39/ — 一撃オンライン遊技説明。初当りからLT約4.7%（約1/1057）、出玉/電サポ。取得日 2026-09-23。
- https://pachimaga.com/free/mach/maker-p/toyomaru/064621.php — パチマガスロマガ。LT中10/87/3振り分け、ゲームフロー。取得日 2026-09-23。
- https://nana-press.com/kaiseki/machine/1079/33189/ — なな徹。LT搭載、基本スペック、遊タイム非搭載。取得日 2026-09-23。

confidence:
- LT搭載/名称/型式/導入日/基本確率/各RUSH性能: INDUSTRY + ANALYSIS_HIGH
- 初当りからLT約4.7%（約1/1057）: ANALYSIS_HIGH（直接解析値）
- 主要振り分け/最終変動・残保留特殊振り分け: ANALYSIS_HIGH

missingFields: []

conflicts: []
