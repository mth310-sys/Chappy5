# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-21
relay: 4 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to current machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- duplicate search performed before writes

## This relay

### 2025-03-17 boundary audit completed
Independent 2025 introduction calendar enumerates exactly five pachinko releases on 2025-03-17:
1. Pうまい棒2 おかわりちょちょちょうだ～いV3 — LT非搭載確認済み、対象外。
2. e真・北斗無双 第5章 ドデカSTART — LT搭載、既登録 COMPLETE_CORE。
3. Pモモキュンソード 速撃3000+ — **LT非搭載**。業界資料は1/319.7→約1/1.47、RUSH62%、時短1/100回、神・絶対無敵BONUSを出玉トリガーとして説明するがLTとはしておらず、導入前試打資料には「ラッキートリガー非搭載」と明記。DB登録しない。
4. PAひぐらしのなく頃に 輪廻転生99Ver. — 転落RUSH+遊タイム構造。LT搭載根拠なし、対象外。
5. PA魔王学院の不適合者 魔王再臨99Ver — LT搭載、既登録 COMPLETE_CORE。

**2025-03-17 boundary: CLOSED.**

Calendar evidence:
- https://pachinko-spec.info/start/149205/ — 2025-03-17 five-machine enumeration
- https://p-johojima.jp/machine_spec/post-2074/ — independent historical new-machine list
- https://news.p-world.co.jp/articles/30304/yugitsushin — Pモモキュンソード industry spec
- https://www.youtube.com/watch?v=u_C5vzkJ_D0 — Pモモキュンソード pre-release test description explicitly says LT非搭載

### Added COMPLETE_CORE
`docs/lt_pachinko_db/machines/2025-04-07_p_revuestarlight_lt4500.md`

#### P少女☆歌劇 レヴュースタァライト ラッキートリガー4500
- 豊丸産業 / 2025-04-07 / 型式 `P少女歌劇レヴュースタァライトLT1`
- 一種二種混合。通常1/199.8、右打ち1/76.2。
- 初当り2R約300個。50%でトップスタァロード、50%通常。
- トップスタァロードはST100回+残保留4個、継続約75%。右打ち大当りは基本約1500個以上。
- LT `追劇` は最低約4500個（1500個×3回）保証後、約52.5%で1500個以上の上乗せループ。終了後はトップスタァロードへ復帰。
- LT経路は業界一次資料が3経路を明記: RUSH中5%の4500個直行、RUSH中10%の追劇10倍ZONE→50%の4500個、同ZONEの残り50%から追劇獲得チャンス→5%成功。
- P-WORLD詳細振り分けとも一致。通常初当り基準の総LT到達率は直接公表値未確認のため独自合算せず UNVERIFIED。
- 新規CONFLICTなし。

Sources:
- https://news.p-world.co.jp/articles/29990
- https://www.p-world.co.jp/machine/database/10212
- https://p.hisshobon.jp/news/2096
- https://1geki.jp/pachinko/p_revuestarlight_lt/

## Effective DB state
Previous handoff: 78 records / 77 COMPLETE_CORE / 1 CONFLICT.
After this relay:
- machine records: **79**
- COMPLETE_CORE: **78**
- CONFLICT: **1**
- INDEX is stale; current machine files + this handoff are the progress source of truth.

## Next restart point
**2025-04-07 boundary is OPEN. Re-enumerate all pachinko introduced on 2025-04-07 from at least two independent calendars, compare against existing machine records, then process the next explicitly LT-equipped unregistered machine after `P少女☆歌劇 レヴュースタァライト ラッキートリガー4500`. Do not close the date boundary until every same-day candidate has an LT-positive/negative determination.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, check current machine files for duplicates, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), and do not calculate an unpublished total LT arrival rate from route probabilities.
