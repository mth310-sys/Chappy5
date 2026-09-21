# Pこの素晴らしい世界に祝福を！ラッキートリガー129緊急クエスト

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: Pこの素晴らしい世界に祝福を！ラッキートリガー129緊急クエスト
formalModel: Pこの素晴らしい世界に祝福を！VLT1
manufacturer: 豊丸産業
releaseDate: 2025-02-17
modelType: ライトミドル / LT搭載
gameType: 1種2種混合機 / ST型下位RUSH + 実質次回型LT
jackpotProbability: 通常時 1/129.8 / 右打ち中 1/39.9
initialPayout: 7R 約490個（払出）100%；終了後このすばチャレンジへ
rushEntryRate: このすばチャレンジ突入100%；チャレンジ突破約33%（突破時はこのすばRUSHまたはLT祝福RUSH）
rushContinuationRate: このすばRUSH 約78%（ST55回+残保留4個の引き戻し込み）
ltName: 祝福RUSH
ltEntryRoute: (1) このすばチャレンジ中の大当りの33%（10R約1000個）から祝福RUSHへ、(2) このすばRUSH中大当りの1%（10R-A約1000個）から祝福RUSHへ。最終変動+残保留中はこのすばチャレンジと同じ振り分け。
ltEntryRate: 通常初当り基準の総LT到達率は直接公表値を確認できずUNVERIFIED。経路別割合を独自合算しない。
ltContinuationRate: 92%。祝福RUSHは実質次回まで。大当り後92%相当で祝福RUSH継続、非継続側でもこのすばRUSHへ復帰する構造。
ltPayoutStructure: 祝福RUSH中: 10R約1000個+祝福RUSH 33% / 4R-AorB+祝福RUSH 59% / 4R-A約310個+このすばRUSH 8%。4Rは約310個または約280個（払出）。
totalPayoutDistribution: 通常時=7R約490個100%。このすばチャレンジ中=10R約1000個+祝福RUSH33% / 4R約310個または約280個+このすばRUSH67%。このすばRUSH中=10R-A約1000個+祝福RUSH1% / 10R-B約1000個+このすばRUSH32% / 4R約310個または約280個+このすばRUSH67%。祝福RUSH中=10R33% / 4Rで祝福RUSH継続59% / 4Rで下位RUSH復帰8%。すべて払出表記。
timeShortening: このすばチャレンジ ST12回+残保留4個 / このすばRUSH ST55回+残保留4個 / 祝福RUSH 実質次回まで
cTimeOrSpecialSystems: 小当り経由の大当りはV入賞が条件。祝福RUSH非継続時もこのすばRUSHへ移行し、再度LTを目指せる。
ceilingOrSupport: 遊タイム非搭載

gameFlow: |
  通常時（1/129.8）
   ↓ 初当り 7R約490個 100%
  このすばチャレンジ（ST12回+残保留4個、突破約33%）
   ├─ 大当り10R 33% → LT「祝福RUSH」
   ├─ 大当り4R 67% → このすばRUSH
   └─ 引き戻せず → 通常時
  このすばRUSH（ST55回+残保留4個、継続約78%）
   ├─ 大当り1% 10R-A → LT「祝福RUSH」
   ├─ その他継続振り分け → このすばRUSH
   └─ 非継続 → 通常時
  LT「祝福RUSH」（実質次回、継続92%）
   ├─ 92%相当 → 祝福RUSH継続
   └─ 8% → このすばRUSHへ復帰

notes:
- 2024-03の199LT版および後発1/49「最終クエスト」とは別スペック。混同しない。
- P-WORLDは祝福RUSH中振り分けを33%+59%継続 / 8%下位復帰と掲載し、92%継続と整合する。
- LT期待値「10000個over」は初当り490個+LT突入時1000個+突入後8554個の合算として解析資料に掲載されるが、主要DB値は個別払出振り分けを優先した。
- 通常初当りからの総LT到達率は公開直接値を確認できなかったため計算で補完しない。

sources:
- https://news.p-world.co.jp/articles/30009/greenbelt — 業界発表。導入2025-02-17、初当り後100%チャレンジ、突破約33%、祝福RUSH継続92%、非継続時下位RUSH移行。
- https://www.p-world.co.jp/machine/database/10201 — 基本スペック、ゲームフロー、全主要振り分け、払出値。
- https://1geki.jp/pachinko/p_konosuba129/ — 型式名 Pこの素晴らしい世界に祝福を！VLT1、メーカー、導入日、機種分類。
- https://1geki.jp/pachinko/p_konosuba129/51/ — このすばチャレンジ12回+残4、突破約33%、突破大当り33% LT / 67%下位RUSH。
- https://1geki.jp/pachinko/p_konosuba129/54/ — 祝福RUSH約92%、実質次回構造、LT期待値定義。
- https://nana-press.com/kaiseki/machine/902/27007/ — 1種2種混合、1/129.8・1/39.9、各継続率、払出、遊タイム非搭載を照合。

confidence: ANALYSIS_HIGH
missingFields:
- 通常初当り基準の総LT到達率（直接公表値未確認）
conflicts: none
