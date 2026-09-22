# LT Pachinko DB — Latest Handoff

retrievedAt: 2026-09-23
relay: 1 / chronological collection

## Read before work
- latest main `README.md`: checked
- `docs/CHAPPY5_LT_PACHINKO_DATABASE_MISSION_V01.md`: checked
- `docs/lt_pachinko_db/INDEX.md`: checked; INDEX remains stale relative to machine records/handoff
- previous `LATEST_HANDOFF.md`: checked
- latest record `2025-11-04_e_no_game_no_life_199.md`: checked
- duplicate search performed before write; no existing exact 2025 deka-heso 239 record found

## Closed boundaries retained
- 2025-07-07 — CLOSED 9/9
- 2025-07-22 — CLOSED 3/3
- 2025-08-04 — CLOSED 9/9
- 2025-08-18 — CLOSED 3/3
- 2025-09-08 — CLOSED / candidate set covered
- 2025-09-22 — CLOSED 2/2
- 2025-10-06 — CLOSED / candidate set covered
- 2025-10-20 — CLOSED 2/2

## Current boundary: 2025-11-04 — OPEN
Candidate set in chronological/discovery order:
1. e花の慶次～黄金の一撃 — COMPLETE_CORE
2. eフィーバーもののがたり — COMPLETE_CORE
3. eルパン三世VSキャッツ・アイ — COMPLETE_CORE
4. e源外伝 EPISODE OF -大龍- — COMPLETE_CORE
5. e ノーゲーム・ノーライフ 319Ver. — COMPLETE_CORE
6. e ノーゲーム・ノーライフ 199Ver. — COMPLETE_CORE
7. e 仮面ライダー電王 デカヘソ239 — **COMPLETE_CORE this relay**
8. P いくさの子 戦極最強ドデカ199ver. — **NEXT / pending LT audit**
9. P Re:ゼロから始める異世界生活 鬼がかり 199ver. — pending LT audit
10. P Re:ゼロから始める異世界生活 鬼がかり 99ver. — pending LT audit
11. P転生したらスライムだった件129ver. — pending LT audit
12. PA GoGo富士山 — pending LT audit
Do not assume all candidates are LT-equipped; create records only after positive LT confirmation.

## e 仮面ライダー電王 デカヘソ239 — COMPLETE_CORE
- 京楽産業. / KYORAKU。型式 `e仮面ライダー電王-239verK2`、検定番号 `5P0702`。全国導入2025-11-04。京楽公式がLT搭載を直接明記。
- 通常図柄揃い約1/239.9。右打ち実質約1/22.5は、大当り約1/239.9＋小当りV入賞約1/31.9＋C時短約1/112.9の合算。
- 初当りは2R約300個100%。55%で下位 `電王RUSH`、45%通常。
- 電王RUSHはST16回＋残保留4個、TOTAL約60%。残保留4個引き戻し約16.5%を含む。
- LT正式名称 `CLIMAX RUSH`。電王RUSH中の図柄揃いから `最終決戦デスイマジン`（発生約30%、勝利約40%）またはC時短契機 `過去か未来かチャレンジ`（発生約20%、成功約50%）を経てLTへ。解析詳細振り分けのLT31回側約12%＋約10%=約22%と整合。
- CLIMAX RUSHはST31回＋残保留4個、TOTAL約80%。LT中は図柄揃いならALL約3000個（1500個×2回）＋LT継続。全当選ベースでは3000個＋LT約80% / STリセット＋LT約20%。
- LT終了後の残保留4個で引き戻した場合は電王RUSH中BONUSと同じ振り分け。無条件LT継続として扱わない。
- 通常遊技全体基準の総LT到達率/確率は公式・業界・複数解析を検索語/資料系統を変えて再探索したが直接公表値未確認。55%や約22%等から独自算出せず `UNVERIFIED_AFTER_RESEARCH`。
- 2024年の `e 仮面ライダー電王` 319.9仕様とは別スペックとして分離。
- conflicts: []。
- record: `docs/lt_pachinko_db/machines/2025-11-04_e_kamen_rider_den_o_dekaheso_239.md`
- record commit: `ebe5fa9a90175501983f8be9a031d75d86f24a14`

Sources:
- https://www.kyoraku.co.jp/news/detail/847
- https://www.kyoraku.co.jp/news/detail/850
- https://news.p-world.co.jp/articles/32050/greenbelt
- https://www.p-world.co.jp/machine/database/10362
- https://hazuse.com/hd/5p0702/
- https://1geki.jp/pachinko/e_kmnr_deno_dh239/
- https://1geki.jp/pachinko/e_kmnr_deno_dh239/52/
- https://nana-press.com/kaiseki/machine/1063/32455/
- https://p.hisshobon.jp/machine/4626/1/111869
- https://p-johojima.jp/machine_spec/post-16414/
- https://chonborista.com/pachinko/kyoraku/242453/

## Effective DB state
Previous effective state: 147 machine records / 146 COMPLETE_CORE / 1 CONFLICT.
This relay added 1 COMPLETE_CORE record.
- machine records: **148**
- COMPLETE_CORE: **147**
- CONFLICT: **1**
- INDEX remains stale; machine files + this handoff are progress source of truth until safe INDEX integration.

## Next restart point
**2025-11-04 boundary remains OPEN. Resume with `P いくさの子 戦極最強ドデカ199ver.`. First positively confirm LT on this exact 199 deka-heso specification. If LT-equipped, collect exact model number, manufacturer, normal/right probabilities, initial payout/distribution, lower RUSH structure, LT formal name, LT routes/rates, lower/LT continuation, payout distribution, ST/time-shortening/C-time or residual-hold handling, and complete game flow. If LT cannot be positively confirmed after adequate cross-source audit, do not create a machine record; preserve exclusion evidence in the handoff and continue chronologically to `P Re:ゼロから始める異世界生活 鬼がかり 199ver.`.**

Before writing: re-read latest main README / LT mission / INDEX / this handoff, duplicate-search, preserve definition differences (`約`/`実質`/`TOTAL`, payout vs expected payout), separate sibling specs, and never infer unpublished total LT arrival rates from route probabilities.
